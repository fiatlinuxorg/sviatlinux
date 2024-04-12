<script>
  // IMPORTS
  import NewPost from "./NewPost.svelte";
  import { Button } from "flowbite-svelte";
  import {
    HomeSolid,
    UserSolid,
    CogSolid,
    SearchOutline,
    CirclePlusOutline,
  } from "flowbite-svelte-icons";

  export let currentPage;
</script>

<div class="bottomnav flex fixed bottom-0 left-0 w-full h-12 bg-blue-950 p-4">
  <div class="flex justify-between w-full h-full">
    <div class="flex items-center gap-2">
      <HomeSolid class="h-7 w-7 text-white" />
    </div>
    <div class="flex items-center gap-2">
      <SearchOutline class="h-7 w-7 text-white" />
    </div>
    <div class="flex items-center gap-2">
      <Button
        class="h-12 w-12 text-white bg-transparent"
        on:click={() => {
          currentPage = NewPost;
        }}
      >
        <CirclePlusOutline class="h-7 w-7 text-white cursor-pointer" />
      </Button>
    </div>
    <div class="flex items-center gap-2">
      <UserSolid class="h-7 w-7 text-white" />
    </div>
    <div class="flex items-center gap-2">
      <CogSolid class="h-7 w-7 text-white" />
    </div>
  </div>
</div>
