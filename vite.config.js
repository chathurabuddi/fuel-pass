import { defineConfig } from 'vite';

export default defineConfig({
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
