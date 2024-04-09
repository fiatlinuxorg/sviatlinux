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
      <Button size="md" class="px-2">Login</Button>
      <NavHamburger class="bg-transparent" />
    </div>
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/frasi">Frasi</NavLi>
    </NavUl>
  {:else}
    <NavHamburger class="bg-transparent" />
    <NavUl>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/">Frasi</NavLi>
    </NavUl>
  {/if}
</Navbar>
