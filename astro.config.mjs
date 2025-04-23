// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

import vue from '@astrojs/vue';

import glsl from 'vite-plugin-glsl';



// https://astro.build/config
export default defineConfig({
  site: 'http://wacuskorea.com/',
  integrations: [mdx(), sitemap(), vue(),],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: '0.0.0.0',
  },
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [glsl()],
      server: {
        hmr: false,
      },
      logLevel: 'debug', // 디버그 로그 활성화
    // build: {
    //     sourcemap: true, // sourcemap 비활성화
    //     rollupOptions: {
    //         output: {
    //           sourcemap: true, // 출력물의 sourcemap 제거
    //         },
    //       },
    //   },
  }
});