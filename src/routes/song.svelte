<script>
	let artist = '';
	let song = '';
</script>

<h1 class="text-3xl">Search lyrics</h1>

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

<a href={`/lyrics/${artist}-${song}`} class="bg-blue-500 text-white bold py-2 px-5"> Search </a>
