import { defineConfig } from 'astro/config';

const owner = process.env.GITHUB_REPOSITORY_OWNER ?? 'yourusername';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'sauna-astro';
const isUserPagesSite = repo === `${owner}.github.io`;

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: isUserPagesSite ? '/' : `/${repo}`,
});
