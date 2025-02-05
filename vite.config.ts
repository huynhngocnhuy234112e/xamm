import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Đảm bảo deploy đúng trên Vercel
  build: {
    outDir: "dist",
  },
});
