import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        base: "/spctr/",
        plugins: [
            react()
        ],
        server: {
            port: 3000
        },
        build: {
            outDir: "build"
        }
    }
})
