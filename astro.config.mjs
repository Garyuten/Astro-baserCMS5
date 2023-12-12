import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  // outDir: "./dist",
  // base: "/",

  site: "https://Garyuten.github.io/", // for GitHub Pages
  outDir: "./docs", // for GitHub Pages
  base: process.env.ROOT_BASE, // ROOT_BASE is defined in .env.development file or GitHub Actions secrets and variables

  // redirects: {
  //   '/index': '/',
  // },
  // output: 'static',
  // build: {
  //   // Example: Generate `page.html` instead of `page/index.html` during build.
  //   format: 'file'
});