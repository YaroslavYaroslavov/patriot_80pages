// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // <--- ВОТ ЭТО ВАЖНОЕ ИЗМЕНЕНИЕ
  build: {
    // Если у вас есть какие-либо настройки build, они могут быть здесь
    // Например, для более старых браузеров:
    // target: 'es2015',
    outDir: "docs", // Директория для сборки
  },
});
