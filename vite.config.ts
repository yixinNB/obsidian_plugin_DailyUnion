import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	build: {
// 		watch: {
// 			buildDelay: 20
// 		},
// 		sourcemap: "inline",
// 		rollupOptions: {
// 			output: {
// 				entryFileNames: "[name].js",
// 				assetFileNames: '[name].[ext]',
// 			}
// 		}
// 	},
// })

import path from 'path';
import builtins from 'builtin-modules';

const prod = (process.argv[2] === 'production');

export default defineConfig(() => {
	return {
		plugins: [react()],
		// watch: !prod,
		build: {
			watch: {
				buildDelay: 20
			},
			sourcemap: prod ? false : 'inline',
			// minify: prod,
			// Use Vite lib mode https://vitejs.dev/guide/build.html#library-mode
			lib: {
				entry: path.resolve(__dirname, './src/main.ts'),
				formats: ['cjs'],
			},
			rollupOptions: {
				output: {
					// Overwrite default Vite output fileName
					entryFileNames: 'main.js',
					assetFileNames: 'styles.css',
				},
				external: ['obsidian',
					'electron',
					"codemirror",
					"@codemirror/autocomplete",
					"@codemirror/closebrackets",
					"@codemirror/collab",
					"@codemirror/commands",
					"@codemirror/comment",
					"@codemirror/fold",
					"@codemirror/gutter",
					"@codemirror/highlight",
					"@codemirror/history",
					"@codemirror/language",
					"@codemirror/lint",
					"@codemirror/matchbrackets",
					"@codemirror/panel",
					"@codemirror/rangeset",
					"@codemirror/rectangular-selection",
					"@codemirror/search",
					"@codemirror/state",
					"@codemirror/stream-parser",
					"@codemirror/text",
					"@codemirror/tooltip",
					"@codemirror/view",
					"@lezer/common",
					"@lezer/lr",
					"@lezer/highlight",
					...builtins,
				],
			},
		},
	}
});
