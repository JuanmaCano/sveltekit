<script context="module">
	export async function load({ params }) {
		const artist = params.artist;
		const song = params.song;
		const res = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
		const lyrics = await res.json();

		return {
			props: {
				lyrics,
				artist,
				song
			}
		};
	}
</script>

<script>
	export let lyrics;
	export let artist;
	export let song;
</script>

<center>
	<h1>{artist}</h1>
	<h3>
		{song}
	</h3>
	<p>
		{lyrics.lyrics}
	</p>
</center>
