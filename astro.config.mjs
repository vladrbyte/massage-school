// @ts-check
import { defineConfig } from 'astro/config';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo && repo.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}` : '/',
});
