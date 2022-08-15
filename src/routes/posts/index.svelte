<script lang="ts">
	// Stores
	import postsStore from '$lib/stores/posts';
</script>

<div class="flex flex-col items-center justify-center m-20">
	<h1 class="xl:text-6xl">Posts</h1>

	{#each $postsStore as post}
		<div class="mt-10">
			<h2 class="xl:text-2xl">{post.title}</h2>
		</div>
	{/each}
</div>
