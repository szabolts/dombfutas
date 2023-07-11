<script lang="ts">
	import { enhance } from "$app/forms";
	// import Radio from "/home/szabikaah/Desktop/dombfutas/src/components/Radio.svelte";
	import {
		Label,
		Input,
		Card,
		Datepicker,
		Radio,
		Button,
	} from "flowbite-svelte";

	let date = new Date();

	export let form;
</script>

<div class="flex justify-center items-center h-screen">
	<Card>
		<h1 class="text-center">Register</h1>

		<form action="?/register" method="POST">
			<div class="mb-6">
				<Label for="email">Email</Label>
				<Input id="email" name="" type="text" required />
			</div>

			<div class="mb-6">
				<Label for="password">Password</Label>
				<Input id="password" name="password" type="password" required />
			</div>

			<div class="mb-6">
				<Label for="password2">Password again</Label>
				<Input
					id="password2"
					name="password2"
					type="password"
					required
				/>
			</div>

			<div class="mb-6">
				<Label for="name">Full name</Label>
				<Input id="name" name="name" type="text" required />
			</div>

			<div class="mb-6">
				<Datepicker datepickerFormat="yyyy/mm/dd" datepickerButtons/>
			</div>

			<div class="mb-6">
				<Radio name="example" value="F">Female</Radio>
				<Radio name="example" value="M">Male</Radio>
			</div>

			{#if form?.user}
				<p class="error">Email is taken.</p>
			{/if}

			<Button color="dark" type="submit">Register</Button>
		</form>
	</Card>
</div>

