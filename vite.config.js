import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, transformerDirectives, transformerVariantGroup, presetIcons } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetAttributify(),
        presetUno(),
        presetIcons()
      ],
      transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
        transformerCompileClass()
      ]
    }),
    Components({
      extensions: ['vue', 'js']
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
