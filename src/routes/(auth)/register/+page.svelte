<script lang="ts">
	import { enhance } from '$app/forms'

	export let form
</script>

<div class="text-column" id="div">
	<h1>Register</h1>

	<form action="?/register" method="POST" use:enhance>
		<div>
			<label for="email">Email</label>
			<input id="email" name="email" type="text" required />
		</div>

		<div>
			<label for="password">Password</label>
			<input id="password" name="password" type="password" required />
		</div>

        <div>
			<label for="password2">Password again</label>
			<input id="password2" name="password2" type="password" required />
		</div>

        <div>
			<label for="name">Full name</label>
			<input id="name" name="name" type="text" required />
		</div>

        

		{#if form?.user}
			<p class="error">Email is taken.</p>
		{/if}

		<button type="submit">Register</button>
	</form>
</div>