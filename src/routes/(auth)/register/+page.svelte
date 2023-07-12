<script lang="ts">
	import { enhance } from "$app/forms";
	import { fade } from 'svelte/transition';
	// import Radio from "/home/szabikaah/Desktop/dombfutas/src/components/Radio.svelte";
	import {
		Label,
		Input,
		Card,
		Datepicker,
		Radio,
		Button,
		Checkbox
	} from "flowbite-svelte";

	let date = new Date();

	export let form;
</script>


<div class="flex justify-center items-center h-screen">
	<Card class="w-screen" >
		<form class="flex flex-col space-y-6" action="?/register" method="POST" use:enhance>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h3>
			<Label class="space-y-2" for="email">
				<span>Email</span>
				<Input id="email" type="email" name="email" placeholder="fussalmar@csoves.com" required />
			</Label>

			<Label class="space-y-2">
				<span>Your password</span>
				<Input id="password" type="password" name="password" placeholder="••••••••" required />
			</Label>

			<Label class="space-y-2">
				<span>Confirm password</span>
				<Input id="password2" type="password" name="password2" placeholder="••••••••" required />
			</Label>

			<div class="flex items-start">
				<Checkbox>I accept the Terms and Conditions</Checkbox>
			</div>


			<!-- <div class="mb-6">
				<Label for="name">Full name</Label>
				<Input id="name" name="name" type="text" required />
			</div>

			<div class="mb-6">
				<Datepicker datepickerFormat="yyyy/mm/dd" />
			</div>

			<div class="mb-6">
				<Radio name="example" value="F">Female</Radio>
				<Radio name="example" value="M">Male</Radio>
			</div> -->

			{#if form?.user}
				<p class="error">Email is taken.</p>
			{/if}

			<Button type="submit" class="w-full">Register</Button>

			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Already have an account? <a href="/login" class="text-primary-700 hover:underline dark:text-primary-500">Login here.</a>
			</div>
		</form>
	</Card>
</div>

