/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		visualizer(),
		splitVendorChunkPlugin()
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					mui: ['@mui/material'],
					refractor: ['refractor']
				}
			}
		}
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './test/setup.ts'
	}
});
