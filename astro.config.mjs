// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';
import { parseIsolatedEntityName } from 'typescript';

// https://astro.build/config
export default defineConfig({
  integrations: [icon({
    include: {
      mdi: ['mdi-home'],
      'fluent-emoji': ['fork-and-knife-with-plate']
    }
  }), react(), tailwind()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  site: 'https://kmhs.info',
});
