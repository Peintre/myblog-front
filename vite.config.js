import { defineConfig } from "vite"
import Vue from '@vitejs/plugin-vue'
import  Components  from "unplugin-vue-components/vite"
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'


export default defineConfig({
    plugins:[Vue(),Components({
        resolvers: [
          ElementPlusResolver()
        ],
      })]
})