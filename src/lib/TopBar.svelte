<script>
  // IMPORTS
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from "flowbite-svelte";

  import Posts from "./Posts.svelte";
  import Frasi from "./Frasi.svelte";
  import { currentPage } from "./currentPage";

  // VARIABLES
  let user = localStorage.getItem("user");
</script>

<Navbar fluid={true} class="bg-transparent">
  <NavBrand href="/">
    <img src="/fiatlinux.svg" class="me-3 h-6 sm:h-9" alt="Fiatlinux logo" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold text-blue-950"
      >fiatlinux</span
    >
  </NavBrand>
  {#if !user}
    <div class="flex md:order-2">
      {#if window.innerWidth > 768}
        <Button size="md" class="px-2 me-3" color="light">Register</Button>
        <Button size="md" class="px-2 me-3 bg-fl_orange">Login</Button>
      {/if}
      <NavHamburger class="bg-transparent" />
    </div>
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/">Frasi</NavLi>
      <NavLi href="/">Profile</NavLi>
    </NavUl>
  {:else}
    <NavHamburger class="bg-transparent" />
    <NavUl>
      <NavLi
        on:click={() => {
          currentPage.set(Posts);
        }}
        href="">Home</NavLi
      >
      <NavLi
        on:click={() => {
          currentPage.set(Frasi);
        }}
        href="">Frasi</NavLi
      >
    </NavUl>
  {/if}
</Navbar>
