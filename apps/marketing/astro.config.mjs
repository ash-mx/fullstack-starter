// @ts-check

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
});
