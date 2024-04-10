<script>
  // IMPORTS
  import Post from "./Post.svelte";
  import NewPost from "./NewPost.svelte";
  import { getAllPosts } from "./posts.js";
  import { getAllUsers } from "./users.js";
  import { onMount } from "svelte";
  import { Button } from "flowbite-svelte";
  import { CirclePlusSolid } from "flowbite-svelte-icons";
  // VARIABLES
  let posts = [];
  let isOpen = false;

  onMount(async () => {
    posts = await getAllPosts();
  });
</script>

<div class="posts w-full flex justify-center">
  <NewPost />
  <div class="w-full lg:w-1/3 flex flex-col gap-2 items-center">
    {#each posts.reverse() as post}
      <Post {post}></Post>
    {/each}
  </div>
</div>
<!-- Add post button -->
<div class="fixed bottom-4 right-4">
  <Button
    size="lg"
    on:click={() => {
      // Open the new post form
      let form = document.querySelector("#new-post");
      form.classList.toggle("hidden");
    }}
    class="bg-blue-950 text-white p-2 rounded-full flex items-center justify-center"
  >
    <CirclePlusSolid class="" />
  </Button>
</div>

<style>
</style>
