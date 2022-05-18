<script>
	import { goto } from '$app/navigation';
	let artist = '';
	let song = '';

	let message = 'All fields are mandatory';
	let show = false;

	function submit() {
		if (artist === '' || song === '') {
			show = true;
		} else {
			show = false;
			goto(`/lyrics/${artist}-${song}`);
		}
	}
</script>

<h1 class="text-3xl">Search lyrics</h1>

{#if show}
	<h1 class="text-2xl text-red-500">
		{message}
	</h1>
{/if}

<input
	type="text"
	placeholder="Artist"
	bind:value={artist}
	class="mt-5 w-full rounded-md text-lg p-4 border-2"
/>

<div class="mt-5" />

<input
	type="text"
	placeholder="Song"
	bind:value={song}
	class="mt-5 w-full rounded-md text-lg p-4 border-2"
/>
<div class="mt-5" />

<button on:click={submit} class="rounded-md  bg-blue-800 text-white py-2 px-5 bold">
	Search
</button>
