import path from 'path'
import react from '@vitejs/plugin-react-swc'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '~', replacement: path.resolve('src') },
			{
				find: '@ui',
				replacement: path.resolve('src', 'shared', 'ui'),
			},
		],
	},
})
