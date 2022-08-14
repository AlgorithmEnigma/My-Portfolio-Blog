<script lang="ts">
	import postsStore from '$lib/stores/posts';
	export let posts;

	if ($postsStore[0] === undefined) {
		postsStore.set(posts);
	}

	console.log($postsStore);
</script>

<h1 class="text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
