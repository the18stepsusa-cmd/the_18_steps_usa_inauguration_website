// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jishnumenona.github.io',
  base: '/the_18_steps_usa_inauguration_website',
  vite: {
    plugins: [tailwindcss()]
  }
});