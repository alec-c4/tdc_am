// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://tdc.am",
  integrations: [svelte(), sitemap()],
  i18n: {
    locales: ["hy", "en", "ru"],
    defaultLocale: "hy",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
