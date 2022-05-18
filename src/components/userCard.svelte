<script>
	export let user;
	const card =
		'p-6 bg-gray-100 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center';
	const circle = 'rounded-full border border-gray-100 shadow-sm';
</script>

<a class={card} href={`/user/${user.id}`}>
	<img src={user.avatar} alt={user.name} class={circle} />
	<h2>{user.name}</h2>
</a>
