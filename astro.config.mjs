import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://paralegal-portfolio.pages.dev',
  integrations: [
    mdx(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
});
