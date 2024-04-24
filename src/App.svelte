<script>
  // IMPORTS
  import Login from "./lib/Login.svelte";
  import Posts from "./lib/Posts.svelte";
  import TopBar from "./lib/TopBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import { currentPage } from "./lib/currentPage.js";
  import { onMount } from "svelte";

  // VARIABLES
  let token = localStorage.getItem("token") || null;
  let user;
  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    user = null;
  }
  let isMobile = window.innerWidth < 768;

  console.log(token);

  let page;
  onMount(() => {
    if (!token) {
      page = Login;
    } else {
      page = Posts;
    }
    currentPage.set(page);

    currentPage.subscribe((value) => {
      page = value;
    });
  });

  // FUNCTIONS

  // EVENT LISTENERS
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 768;
  });
</script>

<div class="min-h-screen">
  <TopBar />
  <main id="main" class="h-full p-2 relative">
    <svelte:component this={page} />
    {#if token}
      <BottomBar />
    {/if}
  </main>
</div>

<style>
  #main {
    height: calc(100vh - 5rem);
  }
</style>
