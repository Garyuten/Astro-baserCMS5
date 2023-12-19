// astro.config.mjs
import { defineConfig } from 'astro/config';
import relativeLinks from "astro-relative-links";

// 環境変数からベースURLを取得
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  var base = "/Astro-baserCMS5/";
} else {
  var base = "/";
}
console.log("base: " + base);

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  outDir: "./docs", // for GitHub Pages
  base: base,
  integrations: [relativeLinks()],
  site: "https://Garyuten.github.io/", // for GitHub Pages
});