import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      name: "vue3-ica-data-table",
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `vue3-ica-data-table.${format}.js`,
    },
  },
});
