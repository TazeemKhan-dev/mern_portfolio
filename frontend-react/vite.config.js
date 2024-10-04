import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import dotenv from 'dotenv'
// import { json } from 'stream/consumers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define environment variables
  },
});
