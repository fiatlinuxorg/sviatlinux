<script>
  // IMPORTS
  import NewPost from "./NewPost.svelte";
  import Profile from "./Profile.svelte";
  import Posts from "./Posts.svelte";
  import { currentPage } from "./currentPage";
  import { Button } from "flowbite-svelte";
  import {
    HomeSolid,
    UserSolid,
    CogSolid,
    SearchOutline,
    CirclePlusOutline,
  } from "flowbite-svelte-icons";
</script>

<div
  class="bottomnav fixed bottom-0 left-0 w-full px-2 py-4 flex items-center gap-2"
>
  <div
    class="app-navigator flex w-full h-full justify-between bg-white rounded-full"
  >
    <Button
      size="xl"
      color="alternative"
      class="p-4 bg-transparent border-0 flex items-center justify-center rounded-full"
      on:click={() => {
        currentPage.set(Posts);
      }}
    >
      <HomeSolid class="w-6 h-6" color="black" />
    </Button>
    <Button
      size="xl"
      color="alternative"
      class="p-4 bg-transparent border-0 flex items-center justify-center rounded-full"
      on:click={() => {
        currentPage.set(Posts);
      }}
    >
      <SearchOutline class="w-6 h-6" color="black" />
    </Button>
    <Button
      size="xl"
      color="alternative"
      class="p-4 bg-transparent border-0 flex items-center justify-center rounded-full"
      on:click={() => {
        currentPage.set(Profile);
      }}
    >
      <UserSolid class="w-6 h-6" color="black" />
    </Button>
    <Button
      size="xl"
      color="alternative"
      class="p-4 bg-transparent border-0 flex items-center justify-center rounded-full"
      on:click={() => {
        currentPage.set(Posts);
      }}
    >
      <CogSolid class="w-6 h-6" color="black" />
    </Button>
  </div>
  <div class="add-post bg-blue-950 rounded-full">
    <Button
      size="xl"
      color="alternative"
      class="new-post p-4 bg-transparent border-0 flex items-center justify-center rounded-full"
      on:click={() => {
        currentPage.set(NewPost);
      }}
    >
      <CirclePlusOutline class="w-6 h-6" color="white" />
    </Button>
  </div>
</div>

<style>
  .bottomnav {
    background: linear-gradient(0deg, #ffffff25 0%, #00000000 100%);
    z-index: 1000;
  }

  .app-navigator {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  }

  .add-post {
    position: relative;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .add-post:hover {
    background-color: black;
  }
</style>
