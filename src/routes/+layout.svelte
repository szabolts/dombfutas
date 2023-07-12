<script lang="ts">
    import "../app.postcss";
    import { enhance } from '$app/forms'
    import { page } from '$app/stores'
	import { DarkMode, Button } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
	import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from 'flowbite-svelte'
	let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm px-1 py-1';

    import '../styles/app.css'
</script>

<svelte:head>
	<title>SvelteKit Auth</title>
</svelte:head>

<!-- <nav>
	{#if !$page.data.user}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{/if}

	{#if $page.data.user}
		<a href="/admin">Admin</a>

		<form class="logout" action="/logout" method="POST" use:enhance>
			<button type="submit">Log out</button>
		</form>
	{/if}
	<DarkMode />
</nav> -->

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
		🏃DombFutas
	  </span> 
	</NavBrand>

	<NavHamburger on:click={toggle} />
	<NavUl  {hidden}>
		{#if !$page.data.user}
	  <NavLi href="/" active={true}>Home</NavLi>
	  <NavLi href="/login">Login</NavLi>
	  <NavLi href="/register">Register</NavLi>
		{/if}
		
		{#if $page.data.user}
		<NavLi href="/" active={true}>Home</NavLi>
		<form class="logout" action="/logout" method="POST" use:enhance>
			<Button type="submit">Log out</Button>
		</form>
		{/if}
	</NavUl>
		
  </Navbar>
  

<main>
	<slot></slot>
</main>

<Footer class="absolute bottom-0 left-0 z-20 w-full">
  <FooterCopyright href="/" by="Dombfutas™" year={2024} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
	<DarkMode />
  </FooterLinkGroup>
</Footer>