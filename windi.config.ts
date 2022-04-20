import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  preflight: true,
  extract: {
    include: ["src/**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
});
