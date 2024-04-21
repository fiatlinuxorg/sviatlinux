<script>
  // IMPORTS
  import Login from "./lib/Login.svelte";
  import Posts from "./lib/Posts.svelte";
  import TopBar from "./lib/TopBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import { currentPage } from "./lib/currentPage.js";
  import { onMount } from "svelte";

  // VARIABLES
  let token = localStorage.getItem("token");
  let user = JSON.parse(localStorage.getItem("user"));
  let isMobile = window.innerWidth < 768;

  let page;

  onMount(() => {
    console.log(token);
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

<TopBar />
<main id="main" class="h-full p-4">
  <svelte:component this={page} />
</main>
{#if isMobile && page != Login}
  <BottomBar />
{/if}

<style>
</style>
