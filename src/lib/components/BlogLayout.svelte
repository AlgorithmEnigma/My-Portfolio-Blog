<script>
	import { dateConvert } from '$lib/utils/dateConvert';

	export let title;
	export let author;
	export let date;
</script>

<div class="flex flex-col items-center justify-center mt-20">
	<h1 class="text-6xl">{title}</h1>
	<div class="flex flex-row m-2">
		<p class="text-gray-600 m-10 text-lg">{author}</p>
		<p class="text-gray-600 m-10 text-lg">{dateConvert(date)}</p>
	</div>
	<slot />
</div>

<style global>
	p {
		font-size: 2rem;
	}
</style>
