<script lang="ts">
  import "../app.postcss";
  import Sidebar from "../components/Sidebar.svelte";
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
  } from "flowbite-svelte";
  import {
    Footer,
    FooterLinkGroup,
    FooterLink,
    FooterCopyright,
  } from "flowbite-svelte";
  import "../styles/app.css";
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
<Navbar class="sticky" let:hidden let:toggle rounded color="form">
  <NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4"
    >
      🏃DombFutas
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} {divClass} {ulClass} class="m-0 p-0">
    {#if !$page.data.user}
      <NavLi href="/" active={activeUrl === `/`}>Főoldal</NavLi>
      <NavLi href="/login" active={activeUrl === `/login`}>Bejelentkezés</NavLi>
      <NavLi href="/register" active={activeUrl === `/register`}
        >Regisztráció</NavLi
      >
    {/if}

    {#if $page.data.user}
      <NavLi href="/" active={activeUrl === `/`}>Főoldal</NavLi>
      <NavLi href="/admin" active={activeUrl === `/admin`}>Admin</NavLi>
      <form class="logout" action="/logout" method="POST" use:enhance>
        <Button class="p-0 m-0" type="submit">Kijelentkezés</Button>
      </form>
    {/if}
  </NavUl>
</Navbar>



<Sidebar></Sidebar>
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
