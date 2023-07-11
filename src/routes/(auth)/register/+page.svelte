<script lang="ts">
	import { enhance } from "$app/forms";
	import Radio from "/home/szabikaah/Desktop/dombfutas/src/components/Radio.svelte";
	import {
		DateInput,
		DatePicker,
		localeFromDateFnsLocale,
	} from "date-picker-svelte";
	import { Datepicker } from "flowbite-svelte";

	let date = new Date();

	let radioValue;
	const options = [
		{
			value: "Pink",
			label: "Female",
		},
		{
			value: "Blue",
			label: "Male",
		},
	];

	export let form;
</script>

<div>
	<h1>Register</h1>

	<form action="?/register" method="POST">
		<div>
			<label for="email"></label>
			<input id="email" name="" type="text" required />
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

		<div>
			<Datepicker />
		</div>

		<div>
			<Radio
				{options}
				fontSize={16}
				legend="Select a starter Pokemon"
				bind:userSelected={radioValue}
			/>
		</div>

		{#if form?.user}
			<p class="error">Email is taken.</p>
		{/if}

		<button type="submit">Register</button>
	</form>
</div>
