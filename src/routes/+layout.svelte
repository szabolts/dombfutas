<script lang="ts">
	import "../app.postcss";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { DarkMode, Button } from "flowbite-svelte";
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Drawer,
		CloseButton,
		SidebarDropdownWrapper,
	} from "flowbite-svelte";
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		ImagePlaceholder,
		TextPlaceholder,
		Skeleton,
		FooterCopyright,
	} from "flowbite-svelte";
	import "../styles/app.css";
	import { Cog } from "svelte-heros-v2";
	import { sineIn } from "svelte/easing";

	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn,
	};
	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	} else {
		drawerHidden = true;
		activateClickOutside = true;
	}
	onMount(() => {
		if (width >= breakPoint) {
			drawerHidden = false;
			activateClickOutside = false;
		} else {
			drawerHidden = true;
			activateClickOutside = true;
		}
	});
	const toggleSide = () => {
		if (width < breakPoint) {
			drawerHidden = !drawerHidden;
		}
	};
	const toggleDrawer = () => {
		drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let spanClass =
		"pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white";
	let divClass = "w-full md:block md:w-auto pr-8";
	let ulClass =
		"flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium";
</script>

<svelte:head>
	<title>Dombfutas</title>
</svelte:head>

<svelte:window bind:innerWidth={width} />
<Navbar class="sticky" let:hidden let:toggle>
	<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
	<NavBrand href="/" class="lg:ml-64">
		<span
			class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4"
		>
			🏃DombFutas
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {divClass} {ulClass}>
		{#if !$page.data.user}
			<NavLi href="/">Főoldal</NavLi>
			<NavLi href="/login">Bejelentkezés</NavLi>
			<NavLi href="/register">Regisztráció</NavLi>
		{/if}

		{#if $page.data.user}
			<NavLi href="/">Főoldal</NavLi>
			<NavLi href="/admin">Admin</NavLi>
			<form class="logout" action="/logout" method="POST" use:enhance>
				<Button type="submit">Kijelentkezés</Button>
			</form>
		{/if}
	</NavUl>
</Navbar>
<!-- {#if $page.data.user}
	<Drawer
		transitionType="fly"
		{backdrop}
		{transitionParams}
		bind:hidden={drawerHidden}
		bind:activateClickOutside
		width="w-64"
		class="overflow-scroll pb-32"
		id="sidebar"
	>
		<div class="flex items-center">
			<CloseButton
				on:click={() => (drawerHidden = true)}
				class="mb-4 dark:text-white lg:hidden"
			/>
		</div>
		<Sidebar asideClass="w-54">
			<SidebarWrapper
				divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800"
			>
				<SidebarGroup>
					<SidebarItem
						label="Home"
						href="/"
						on:click={toggleSide}
						active={activeUrl === `/`}
					/>
					<SidebarDropdownWrapper label="Articles">
						<SidebarItem
							label="Article 1"
							href={`/blog/2023-01-01`}
							{spanClass}
							on:click={toggleSide}
							active={activeUrl === "/blog/2023-01-01"}
						/>
						<SidebarItem
							label="Article 2"
							href="/blog/2023-01-02"
							{spanClass}
							on:click={toggleSide}
							active={activeUrl === "/blog/2023-01-02"}
						/>
					</SidebarDropdownWrapper>
					<SidebarItem
						label="Regisztráció"
						href="/register"
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === "/register"}
					/>
					<SidebarItem
						label="Bejelentkezés"
						href="/login"
						{spanClass}
						on:click={toggleSide}
						active={activeUrl === "/login"}
					/>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Drawer>
{/if} -->

<main>
	<slot />
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
