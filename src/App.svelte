<script>
  // IMPORTS
  import Login from "./lib/Login.svelte";
  import Posts from "./lib/Posts.svelte";
  import Profile from "./lib/Profile.svelte";
  import Settings from "./lib/Settings.svelte";
  import NewPost from "./lib/NewPost.svelte";
  import TopBar from "./lib/TopBar.svelte";
  import BottomBar from "./lib/BottomBar.svelte";
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  // VARIABLES
  let token = localStorage.getItem("token") || "asd";
  let user = JSON.parse(localStorage.getItem("user"));
  let isMobile = window.innerWidth < 768;
  let pages = {
    home: Posts,
    profile: Profile,
    settings: Settings,
    newpost: NewPost,
    login: Login,
  };
  let currentPage = pages.home;
  // FUNCTIONS

  // EVENT LISTENERS
  window.addEventListener("resize", () => {
    isMobile = window.innerWidth < 768;
  });

  // ON MOUNT
  onMount(() => {
    if (token) {
      localStorage.setItem("page", "home");
    }
    window.addEventListener("storage", () => {
      if (localStorage.getItem("page")) {
        currentPage = pages[localStorage.getItem("page")];
      }
    });
  });
</script>

<TopBar />
<main id="main" class="h-full p-4">
  {#if token}
    <svelte:component this={currentPage} />
  {:else}
    <Login />
  {/if}
</main>
{#if isMobile}
  <BottomBar bind:currentPage />
{/if}

<style>
</style>
