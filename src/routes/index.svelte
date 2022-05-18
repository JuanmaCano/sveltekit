<script>
	import UserCard from './../components/userCard.svelte';
	import { users } from '../stores/userStore';
	let search = '';
	let filtered = [];

	$: {
		if (search) {
			filtered = $users.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
		} else {
			filtered = [...$users];
		}
	}
</script>

<svelte:head>
	<title>Introduction to SvelteKit</title>
</svelte:head>

<input
	type="text"
	placeholder="Search"
	bind:value={search}
	class="w-full rounded-md text-lg p-4 border-2"
/>

<div class="py-5 grid gap-5 md:grid-cols-3">
	{#each filtered as user}
		<UserCard {user} />
	{/each}
</div>
