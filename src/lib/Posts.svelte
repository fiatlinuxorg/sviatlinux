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
    console.log(posts);
  });
</script>

<div class="posts w-full flex justify-center">
  <div class="w-full lg:w-1/3 flex flex-col gap-2 items-center">
    {#each posts.reverse() as post}
      <Post {post}></Post>
    {/each}
  </div>
</div>

<style>
</style>
