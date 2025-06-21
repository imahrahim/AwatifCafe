import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://awatif-cafe-uakt.vercel.app", // oder deine eigene Domain
  integrations: [tailwind()],
  output: 'static',
});