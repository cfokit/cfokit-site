import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cmokit from '@cmokit/astro';
import config from './cmokit.config.ts';

export default defineConfig({
  site: 'https://cfokit.ai',
  integrations: [cmokit(config)],
  vite: { plugins: [tailwindcss()] },
});
