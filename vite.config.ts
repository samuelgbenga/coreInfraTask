import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from '@svgr/rollup';
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    // Optional SVGR options
    svgo: true,
    svgoConfig: {
      plugins: [
        {
          name: 'removeViewBox',
        },
      ],
    },
    titleProp: true,
    ref: true,
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
