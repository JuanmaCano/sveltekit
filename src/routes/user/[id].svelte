<script context="module">
	export async function load({ params }) {
		const id = params.id;
		const res = await fetch(`https://reqres.in/api/users/${id}`);
		const user = await res.json();
		return {
			props: {
				user
			}
		};
	}
</script>

<script>
	export let user;
	const circle = 'rounded-full border border-gray-100 shadow-2xl';
</script>

<center>
	<div class="my-10 p-5">
		<img src={user.data.avatar} alt="avatar" class={circle} />
		<h1 class="text-4xl my-3 uppercase bold">
			{user.data.first_name}
			{user.data.last_name}
		</h1>
		<h1 class="text-1xl my-3">
			{user.data.email}
		</h1>
		<p class="text-center">
			{user.support.text}
		</p>
	</div>
</center>
