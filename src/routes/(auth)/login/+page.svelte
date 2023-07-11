<script lang="ts">
	import { applyAction, enhance } from '$app/forms'

	export let form
</script>

<div class="text-column" id="div">
	<h1>Login</h1>

	<form action="?/login" method="POST" use:enhance>
		<div>
			<label for="email">Email</label>
			<input id="email" name="email" type="text" required />
		</div>

		<div>
			<label for="password">Password</label>
			<input id="password" name="password" type="password" required />
		</div>

		{#if form?.invalid}
			<p class="error">Username and password is required.</p>
		{/if}

		{#if form?.credentials}
			<p class="error">You have entered the wrong credentials.</p>
		{/if}

		<button type="submit">Log in</button>
	</form>
</div>