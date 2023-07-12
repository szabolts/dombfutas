<script lang="ts">
	import { applyAction, enhance } from "$app/forms";
	import { Label, Input, Card, Button, Checkbox } from "flowbite-svelte";
	import { fade } from 'svelte/transition';

	export let form;
</script>

<div transition:fade class="flex justify-center items-center h-screen">
	<Card>
		<form class="flex flex-col space-y-6" action="?/login" method="POST">
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
	
			<Label class="space-y-2" for="email">
				<span>Email</span>
				<Input id="email" type="email" name="email" placeholder="fussalmar@csoves.com" required />
			</Label>

			<Label class="space-y-2">
				<span>Your password</span>
				<Input id="password" type="password" name="password" placeholder="••••••••" required />
			</Label>

			<div class="flex items-start">
				<Checkbox>Remember me</Checkbox>
				<a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a>
			</div>
			<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/register" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>
			</div>

			{#if form?.invalid}
				<p class="error">Username and password is required.</p>
			{/if}

			{#if form?.credentials}
				<p class="error">You have entered the wrong credentials.</p>
			{/if}
		</form>
	</Card>
</div>


