// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import starlightThemeGalaxy from 'starlight-theme-galaxy';

// https://astro.build/config
export default defineConfig({
	site: 'https://etjump.com',
	integrations: [
		// Starlight must come before mdx() so Expressive Code is registered first.
		starlight({
			title: 'ETJump',
			description: 'Documentation for ETJump, a trickjump modification for Wolfenstein: Enemy Territory.',
			plugins: [starlightThemeGalaxy()],
			customCss: ['./src/styles/tokens.css', './src/styles/starlight.css'],
			disable404Route: true,
			// Docs header: site nav on desktop, native compact header on mobile.
			components: {
				Header: './src/components/DocsHeader.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/etjump/etjump' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/AcyWMqR' },
			],
			sidebar: [
				{
					label: 'Start here',
					items: [{ label: 'Getting started', slug: 'docs/getting-started' }],
				},
				{
					label: 'Client',
					items: [
						{ label: 'Overview', slug: 'docs/client' },
						{ label: 'Cvars', slug: 'docs/client/cvars' },
						{ label: 'Commands', slug: 'docs/client/commands' },
					],
				},
				{
					label: 'Mapping',
					items: [
						{ label: 'Overview', slug: 'docs/mapping' },
						{ label: 'Entities', slug: 'docs/mapping/entities' },
					],
				},
				{
					label: 'Server',
					items: [
						{ label: 'Overview', slug: 'docs/server' },
						{ label: 'Setup', slug: 'docs/server/setup' },
					],
				},
				{
					label: 'Docs archive (Read the Docs)',
					link: 'https://etjump.readthedocs.io/',
					attrs: { target: '_blank', rel: 'noopener' },
				},
			],
		}),
		mdx(),
		sitemap(),
	],
});
