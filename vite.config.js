import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import flowbiteReact from 'flowbite-react/plugin/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        darkMode: 'class', // Habilita el modo oscuro basado en clases
        content: [
          "./index.html",
          "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir JSX
          "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {},
        },
      },
    }),
    flowbiteReact(),
  ],
});