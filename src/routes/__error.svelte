<script context="module" lang="ts">
	export function load({ error, status }: { error: Error; status: number }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	export let title: string;

	const path = $page.url.pathname.split('/');
	const subpath = path[1];
	const subpage = path[2];

	// console.log(subpage, subpath);
</script>

<div class="flex flex-col items-center justify-center mt-20">
	<h1 class="text-red-400 text-6xl">{title}</h1>

	<div class="text-4xl m-20">
		{#if subpath === 'posts'}
			<p>Post not found</p>
		{:else}
			<p>Page not found</p>
		{/if}
	</div>
</div>
