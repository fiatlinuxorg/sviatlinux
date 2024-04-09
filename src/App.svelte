<script>
  // IMPORTS
  import Login from "./lib/Login.svelte";
  import TopBar from "./lib/TopBar.svelte";
  import Posts from "./lib/Posts.svelte";
  import { Button } from "flowbite-svelte";

  // VARIABLES
  let token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));

  // FUNCTIONS
</script>

<TopBar />
<main class="h-full p-4">
  {#if token}
    <Posts />
  {:else}
    <Login />
  {/if}
</main>

<style>
</style>
