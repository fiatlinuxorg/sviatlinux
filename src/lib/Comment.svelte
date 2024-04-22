<script>
  import { Avatar } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";
  import { parseContent } from "./posts.js";

  export let comment;
</script>

<div class="comment flex items-center gap-2 mt-2">
  <div class="flex flex-col">
    <div class="user flex items-center gap-2">
      {#if comment.user.pfp != "default.jpg"}
        <Avatar
          src={"http://192.168.1.3:8000/api/user_avatars/" + comment.user.pfp}
          alt={comment.user.name}
          class="cursor-pointer overflow-hidden h-10 min-w-10"
          on:click={() => {
            console.log("clicked");
          }}
        />
      {:else}
        <UserCircleSolid
          size="xl"
          class="cursor-pointer"
          on:click={() => {
            console.log("clicked");
          }}
        />
      {/if}
      <div class="info flex justify-between items-center w-full">
        <h2>{comment.user.name}</h2>
      </div>
    </div>
    <p class="text-md">{@html parseContent(comment.content)}</p>
  </div>
</div>
