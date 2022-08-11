<script context="module">
	import H1 from '$lib/components/mdComponents/h1.svelte';
	export { H1 as h1 };
</script>

<script>
	export let title = '';
	// export let author;
	// export let date;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<slot />
