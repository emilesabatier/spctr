import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'


export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd())

    return {
        base: "/",
        plugins: [
            react()
        ],
        server: {
            port: 3000
        },
        build: {
            outDir: "build",
            rollupOptions: {
                input: {
                    main: resolve(__dirname, "index.html"),
                    404: resolve(__dirname, "404.html"),
                }
            }
        }
    }
})
