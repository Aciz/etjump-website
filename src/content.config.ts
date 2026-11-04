import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Starlight owns everything under src/content/docs/docs/ and serves it at /docs/*.
const docs = defineCollection({
	loader: docsLoader(),
	schema: docsSchema(),
});

// Dated posts: release notes, news etc.
const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			tags: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
		}),
});

// Long-form guides and tutorials.
const tutorials = defineCollection({
	loader: glob({ base: './src/content/tutorials', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		updated: z.coerce.date().optional(),
		difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { docs, news, tutorials };
