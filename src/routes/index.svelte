<script lang="ts">
	// Svelte
	import { fly, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	// Stores
	import postsStore from '$lib/stores/posts';
	import projectsStore from '$lib/stores/projects';
	import { select_option } from 'svelte/internal';

	// Props
	export let projects;
	export let posts;

	let loading = false;
	setTimeout(() => {
		loading = true;
	}, 100);

	if ($postsStore[0] === undefined) {
		postsStore.set(posts);
	}
	if ($projectsStore[0] === undefined) {
		projectsStore.set(projects);
	}

	console.log($postsStore);
	console.log($projectsStore);
</script>

{#if loading}
	<section in:fly={{ x: -300, duration: 1000 }}>
		<div class="flex flex-col justify-center items-center">
			<p class="xl:text-2xl">Hi, my name is</p>
			<h1 class="xl:text-6xl">Jordan Lowell.</h1>
			<p class="xl:text-2xl">I love to build big things.</p>
		</div>
	</section>
{/if}
