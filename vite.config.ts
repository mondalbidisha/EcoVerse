import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn: any = {
  registerType:'autoUpdate',
  includeAssests:['favicon.ico', "pwa-192x192.png", "pwa-64x64.png", "pwa-512x512.png", "maskable-icon-512x512.png"],
  manifest:{
    name:"EcoVerse",
    short_name:"EcoVerse",
    description:"EcoVerse is an app emphasizing ecological sustainability and human-environment interaction.",
    icons:[
      {
        "src": "pwa-64x64.png",
        "sizes": "64x64",
        "type": "image/png"
      },
      {
        "src": "pwa-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "pwa-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "maskable-icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
  ],
    display:"standalone",
    scope:'/',
    start_url:"/",
    orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
});