import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fuel-pass/',
  server: {
    proxy: {
      '/api': {
        target: 'https://fuelpass.gov.lk',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
