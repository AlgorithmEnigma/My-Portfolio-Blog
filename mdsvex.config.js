import { defineMDSveXConfig as defineConfig } from 'mdsvex';
// import { join } from 'path';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: true,
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
