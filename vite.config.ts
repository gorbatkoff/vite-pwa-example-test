import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  orientation: "any",
  display: "standalone",
  dir: "auto",
  lang: "ru-RU",
  name: "Gorbatkoff App",
  short_name: "GAPP",
  start_url: "/",
  scope: "/",
  description: "Наше классное приложение",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
