<script lang="ts">
	import projectsStore from '$lib/stores/projects';
</script>

<h1>Posts</h1>

<div class="flex flex-col items-center justify-center m-20">
	<h1 class="xl:text-6xl">Guestbook</h1>

	{#each $projectsStore as project}
		<div class="mt-10">
			<h2 class="xl:text-2xl">{project.title}</h2>
		</div>
	{/each}
</div>
