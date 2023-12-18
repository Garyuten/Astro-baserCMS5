// astro.config.mjs
import { defineConfig } from 'astro/config';
import relativeLinks from "astro-relative-links";

// 環境変数からベースURLを取得
// const base = process.env.VITE_ROOT_BASE || "/Astro-baserCMS5/";
const base = "/Astro-baserCMS5/";
console.log("base: " + base);

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  // outDir: "./dist",
  base: "/Astro-baserCMS5/",
  integrations: [relativeLinks()],

  site: "https://Garyuten.github.io/", // for GitHub Pages
  outDir: "./docs", // for GitHub Pages
  base: process.env.VITE_ROOT_BASE,
});