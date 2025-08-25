// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://effortless-starlight-e56d27.netlify.app",
  integrations: [preact()]
});