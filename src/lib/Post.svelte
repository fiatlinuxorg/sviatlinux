<script>
  // IMPORTS
  import { Card, Avatar, Button } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";

  // FUNCTIONS
  /**
   * Express a timestamp in a "time ago" format.
   * @param date
   * @returns string
   */
  let diffForHumans = (date) => {
    /**
     * Express a timestamp in a "time ago" format.
     * seconds, minutes, hours, days, weeks, months, years
     */
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years" + " ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months" + " ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days" + " ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours" + " ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes" + " ago";
    }
    return Math.floor(seconds) + " seconds" + " ago";
  };

  // FIELDS
  export let post;

  // VARIABLES
</script>

<Card class="min-w-full relative flex flex-col justify-between h-[500px] ">
  <div>
    <div class="user flex items-center gap-2">
      {#if post.user.pfp != "default.jpg"}
        <Avatar
          src={"http://localhost:8000/api/user_avatars/" + post.user.pfp}
          alt={post.user.name}
          class="cursor-pointer"
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
        <h2>{post.user.name}</h2>
        <p class="text-sm">{diffForHumans(post.created_at)}</p>
      </div>
    </div>
    <div class="content mt-2">
      <h2 class="title">{post.title}</h2>
      {#if post.image}
        <img
          src={"http://localhost:8000/api/post_images/" + post.image}
          alt={post.title}
          class="w-full object-cover rounded-lg mt-2"
        />
      {/if}
      <p class="text-md">{post.content}</p>
    </div>
  </div>
  <div class="footer actions mt-2">
    <Button size="sm" class="me-2 text-xl p-1">🖕</Button>
    <Button size="sm" class="text-xl p-1">💀</Button>
    <!--<AnnotationSolid class="text-xl" />-->
  </div>
</Card>
