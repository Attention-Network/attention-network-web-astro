/** @format */

import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [compress(), sitemap(), react()],
  output: "server",
  adapter: vercel()
});