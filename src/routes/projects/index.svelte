<script lang="ts">
	import projectsStore from '$lib/stores/projects';
</script>

<div class="flex flex-col items-center justify-center m-20">
	<h1 class="xl:text-6xl">Projects</h1>

	{#each $projectsStore as project}
		<div class="mt-10">
			<h2 class="xl:text-2xl">{project.title}</h2>
		</div>
	{/each}
</div>
