import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  includeAssets: [
    "favicon.ico",
    "icon512_rounded.png",
    "icon512_maskable.png",
    "vite.svg",
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.png",
      sizes: "1919x927",
      type: "image/png",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.png",
      sizes: "450x811",
      type: "image/png",
      form_factor: "narrow",
    },
  ],
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      sizes: "192x192",
      src: "android-launchericon-192-192.png",
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
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        cleanupOutdatedCaches: false,
        sourcemap: true,
      },
      manifest: manifest as any,
    }),
  ],
});
