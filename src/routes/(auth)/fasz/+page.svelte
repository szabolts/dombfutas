<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { Label, Input, Card, Button } from "flowbite-svelte";

	export let form;
</script>

<div class="flex justify-center items-center h-screen">
	<Card>
		<h1 class="text-center">Login</h1>

		<form action="?/login" method="POST">
			<div class="mb-6">
				<Label for="email">Email</Label>
				<Input id="email" name="email" type="text" required />
			</div>

			<div class="mb-6">
				<Label for="password">Password</Label>
				<Input id="password" name="password" type="password" required />
			</div>

			{#if form?.invalid}
				<p class="error">Username and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
			{/if}

			<Button color="dark" type="submit">Log in</Button>
		</form>
	</Card>
</div>
 <div>
    <Button color="dark">kaka</Button>
 </div>