import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.sombreropainting.com",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/articles/"),
    }),
  ],
});
