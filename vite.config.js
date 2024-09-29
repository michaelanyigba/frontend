import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // This should point to the folder where your build is placed
  },
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api":{
        target: "https://liv-backend-2.onrender.com"
      }
    }
  },
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       "/api":{
//         target: "http://localhost:5000"
//       }
//     }
//   },
// })

