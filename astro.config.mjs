import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro'
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk()],
  output: "server",
  adapter: cloudflare({
    imageService: 'cloudflare'
 })
});