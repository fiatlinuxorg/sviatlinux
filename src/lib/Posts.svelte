<script>
  // IMPORTS
  import Post from "./Post.svelte";
  import { getAllPosts } from "./posts.js";
  import { getAllUsers } from "./users.js";
  import { onMount } from "svelte";
  // VARIABLES
  let posts = [];
  let auth = JSON.parse(localStorage.getItem("user")) || {};

  onMount(() => {
    const interval = setInterval(async () => {
      posts = await getAllPosts();
    }, 60000);
    getAllPosts().then((data) => {
      posts = data;
    });

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="p-2">
  <h2 class="text-2xl font-bold">New Posts</h2>
</div>
<div class="posts w-full flex justify-center mb-20">
  <div class="w-full lg:w-1/3 flex flex-col gap-2 items-center">
    {#each posts.reverse() as post}
      <Post {post} {auth}></Post>
    {/each}
  </div>
</div>

<style>
</style>
