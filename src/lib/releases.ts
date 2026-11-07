import { CURRENT_VERSION, CURRENT_VERSION_DOWNLOAD, GITHUB_URL } from '../consts';

// Releases are read from the GitHub API at build time. The site is static, so
// the list is a snapshot of whenever it was last built; the manual deploy
// workflow keeps it reasonably fresh. A GITHUB_TOKEN is optional but raises the
// rate limit in CI.
const RELEASES_API = 'https://api.github.com/repos/etjump/etjump/releases?per_page=100';

/** Tag used for the rolling development build. */
export const DEV_TAG = 'latest';

interface GithubAsset {
	name: string;
	browser_download_url: string;
	size: number;
}

interface GithubRelease {
	tag_name: string;
	name: string | null;
	html_url: string;
	published_at: string | null;
	prerelease: boolean;
	draft: boolean;
	assets: GithubAsset[];
}

export interface Release {
	tag: string;
	title: string;
	url: string;
	downloadUrl: string | null;
	assetName: string | null;
	size: number | null;
	publishedAt: Date | null;
	prerelease: boolean;
}

export interface ReleaseData {
	stable: Release;
	dev: Release | null;
	older: Release[];
}

const toRelease = (raw: GithubRelease): Release => {
	const asset = raw.assets.find((candidate) => candidate.name.endsWith('.zip')) ?? raw.assets[0] ?? null;

	return {
		tag: raw.tag_name,
		title: raw.name ?? raw.tag_name,
		url: raw.html_url,
		downloadUrl: asset?.browser_download_url ?? null,
		assetName: asset?.name ?? null,
		size: asset?.size ?? null,
		publishedAt: raw.published_at ? new Date(raw.published_at) : null,
		prerelease: raw.prerelease || raw.draft,
	};
};

// If GitHub is unreachable the page still needs a working primary download.
const fallbackData = (): ReleaseData => ({
	stable: {
		tag: CURRENT_VERSION,
		title: `ETJump ${CURRENT_VERSION}`,
		url: `${GITHUB_URL}/releases/tag/${CURRENT_VERSION}`,
		downloadUrl: CURRENT_VERSION_DOWNLOAD,
		assetName: CURRENT_VERSION_DOWNLOAD.split('/').pop() ?? null,
		size: null,
		publishedAt: null,
		prerelease: false,
	},
	dev: null,
	older: [],
});

export async function getReleaseData(): Promise<ReleaseData> {
	const token = process.env.GITHUB_TOKEN;
	const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
	if (token) headers.Authorization = `Bearer ${token}`;

	try {
		const response = await fetch(RELEASES_API, { headers });
		if (!response.ok) throw new Error(`GitHub responded ${response.status}`);

		const releases = ((await response.json()) as GithubRelease[]).map(toRelease);
		const dev = releases.find((release) => release.tag === DEV_TAG) ?? null;
		const stableReleases = releases.filter((release) => release.tag !== DEV_TAG && !release.prerelease);
		const stable = stableReleases[0] ?? fallbackData().stable;

		return {
			stable,
			dev,
			older: stableReleases.filter((release) => release.tag !== stable.tag),
		};
	} catch (error) {
		console.warn(`[downloads] Could not load GitHub releases: ${error}`);
		return fallbackData();
	}
}

// Cache per process: the dev server re-renders on every request but the release
// list only needs to be fetched once per session.
let cached: Promise<ReleaseData> | null = null;

export const loadReleaseData = (): Promise<ReleaseData> => (cached ??= getReleaseData());

export const formatReleaseDate = (date: Date | null): string | null =>
	date
		? date.toLocaleDateString('en-us', {
				year: 'numeric',
				month: 'short',
				day: 'numeric',
			})
		: null;

export const formatSize = (bytes: number | null): string | null => {
	if (!bytes) return null;

	const megabytes = bytes / 1_048_576;
	return `${megabytes.toFixed(megabytes >= 10 ? 0 : 1)} MB`;
};

/** `etjump-3.6.2-132-ga7663c3a.zip` -> `3.6.2-132-ga7663c3a` */
export const buildLabel = (assetName: string | null): string | null =>
	assetName ? assetName.replace(/^etjump-/, '').replace(/\.zip$/i, '') : null;
