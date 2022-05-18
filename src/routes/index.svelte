<script>
	import UserCard from './../components/userCard.svelte';
	import { users } from '../stores/userStore';
	import userCard from '../components/userCard.svelte';
</script>

<svelte:head>
	<title>Introducción a SvelteKit</title>
</svelte:head>

<div class="mt-16 py-5 grid gap-5 md:grid-cols-3">
	{#each $users as user}
		<UserCard {user} />
	{/each}
</div>
