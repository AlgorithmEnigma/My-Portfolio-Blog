<script lang="ts">
	import postsStore from '$lib/stores/posts';
	import projectsStore from '$lib/stores/projects';

	export let projects;
	export let posts;

	if ($postsStore[0] === undefined) {
		postsStore.set(posts);
	}
	if ($projectsStore[0] === undefined) {
		projectsStore.set(projects);
	}

	console.log($postsStore);
	console.log($projectsStore);
</script>

<h1 class="text-4xl">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
