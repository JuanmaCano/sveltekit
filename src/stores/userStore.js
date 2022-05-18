import { writable } from 'svelte/store';
export const users = writable([]);

const fetchUsers = async () => {
	const url = await fetch('https://reqres.in/api/users');
	const data = await url.json();
	const loadUsers = data.data.map((data) => {
		return {
			id: data.id,
			name: data.first_name,
			avatar: data.avatar
		};
	});
	users.set(loadUsers);
};

fetchUsers();
