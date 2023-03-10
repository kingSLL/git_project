import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import {
  VantResolver,
  ElementPlusResolver,
} from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      multiplexing: fileURLToPath(
        new URL("./src/components/reusable_components", import.meta.url)
      ),
      pages: fileURLToPath(
        new URL("./src/components/discove_music/pages", import.meta.url)
      ),
    },
  },
  server: {
    // proxy: {
    //   "/api": {
    //     target: "https://music.163.com/discover",
    //     ws: true,
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
});
