import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			context: '/src/context',
			components: '/src/components',
			data: '/src/data',
			hooks: '/src/hooks',
			pages: '/src/pages',
			styles: '/src/styles',
			utils: '/src/utils',
		},
	},
})
