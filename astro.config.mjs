// astro.config.mjs
import { defineConfig } from 'astro/config';

// 環境変数からベースURLを取得
const base = process.env.VITE_ROOT_BASE || '/';


// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  // outDir: "./dist",
  base: base,

  site: "https://Garyuten.github.io/", // for GitHub Pages
  outDir: "./docs", // for GitHub Pages
  base: process.env.VITE_ROOT_BASE,
});