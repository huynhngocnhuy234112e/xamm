import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Đảm bảo đường dẫn tương đối để tránh lỗi
  build: {
    outDir: "dist",
  },
});

