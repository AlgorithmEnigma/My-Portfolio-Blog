import { defineMDSveXConfig as defineConfig } from 'mdsvex';
// import { join } from 'path';

const path_to_layout = './src/lib/components/Layout.svelte';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: true,
	layout: path_to_layout,
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
