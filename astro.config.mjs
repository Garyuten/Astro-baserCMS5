import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  publicDir: "./public",
  // outDir: "./dist",
  // base: "/",

  site: "https://Garyuten.github.io/",
  outDir: "./docs",
  base: "/Astro-baserCMS5",
  // redirects: {
  //   '/index': '/',
  // },
  // output: 'static',
  // build: {
  //   // Example: Generate `page.html` instead of `page/index.html` during build.
  //   format: 'file'
  // }
});