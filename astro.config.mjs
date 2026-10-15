// @ts-check
import { defineConfig } from 'astro/config';

// На GitHub Actions переменная GITHUB_REPOSITORY = "владелец/репозиторий".
// Из неё собираем адрес GitHub Pages и префикс "/репозиторий".
// Локально переменной нет — сайт работает от корня, как раньше.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo && repo.toLowerCase() === `${owner}.github.io`.toLowerCase();

// https://astro.build/config
export default defineConfig({
  site: owner ? `https://${owner.toLowerCase()}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}` : '/',
});
