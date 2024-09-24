import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import react from "@vitejs/plugin-react";
import renderer from "vite-plugin-electron-renderer";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      electron([
        {
          entry: "index.ts",
        },
      ]),
      renderer(),
    ],
  };
});
