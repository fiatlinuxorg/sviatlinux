<script>
  // IMPORTS
  import { Card, Avatar, Button } from "flowbite-svelte";
  import { AnnotationSolid } from "flowbite-svelte-icons";

  // FUNCTIONS
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
  let user;
</script>

<Card class="min-w-full">
  <div class="user flex items-center gap-2">
    <Avatar src="https://i.pravatar.cc/300" />
    <div class="info flex justify-between items-center w-full">
      <h2>Etanolo</h2>
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
    <p class="">{post.content}</p>
  </div>
  <div class="actions mt-2">
    <Button size="sm" class="me-2 text-xl p-1">🖕</Button>
    <Button size="sm" class="text-xl p-1">💀</Button>
    <!--<AnnotationSolid class="text-xl" />-->
  </div>
</Card>
