<script>
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<div class="container p-2 mx-auto">
	<slot />
</div>

<style>
	.container {
		padding-top: 5rem;
	}
</style>
