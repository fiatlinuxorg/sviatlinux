<script>
  // IMPORTS
  import { Card, Avatar, Button } from "flowbite-svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";
  import {
    getComments,
    parseContent,
    deletePost,
    insertComment,
  } from "./posts.js";
  import { TrashBinSolid } from "flowbite-svelte-icons";
  import Comment from "./Comment.svelte";
  import { onMount } from "svelte";

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
      return Math.floor(interval) + "y" + " ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + "m" + " ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + "d" + " ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + "h" + " ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + "m" + " ago";
    }
    return Math.floor(seconds) + "s" + " ago";
  };

  // FIELDS
  export let post;
  export let auth;

  // VARIABLES
  let comments = [];
  let isCommentsVisible = false;
  let content = "";
</script>

<Card
  class="min-w-full relative rounded-2xl flex flex-col justify-between min-h-[500px]"
  id={post.id}
>
  <div>
    {#if post.user.id == auth.id}
      <Button
        size="xl"
        color="alternative"
        class="p-1 float-end m-1"
        on:click={() => {
          deletePost(post.id).then((response) => {
            document.getElementById(post.id).remove();
          });
        }}
      >
        <TrashBinSolid color="dark" size="lg" />
      </Button>
    {/if}
    <div class="user flex items-center gap-2">
      {#if post.user.pfp != "default.jpg"}
        <Avatar
          src={"https://fiatlinux.it/api/user_avatars/" + post.user.pfp}
          alt={post.user.name}
          class="cursor-pointer overflow-hidden h-10 min-w-10 lg:min-w-12 lg:h-12"
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
      <div class="info flex justify-between flex-col w-full">
        <h2 class="text-fl_gray text-md lg:text-xl">{post.user.name}</h2>
        <p class="text-sm font-semibold text-gray-400 lg:text-md">
          {diffForHumans(post.created_at)}
        </p>
      </div>
    </div>
    <div class="content mt-2">
      <h2 class="title text-fl_gray">{post.title}</h2>
      {#if post.image}
        <img
          src={"https://fiatlinux.it/api/post_images/" + post.image}
          alt={""}
          class="w-full object-cover rounded-lg mt-2"
        />
      {/if}
      {#if post.content}
        <p class="text-md text-gray-700 lg:text-lg">
          {@html parseContent(post.content)}
        </p>
      {/if}
    </div>
  </div>
  <div class="footer actions mt-2">
    <!-- TODO 
    <div class="mb-2">
      <Button size="sm" color="light" class="me-2 text-xl p-1">🖕</Button>
      <Button size="sm" color="light" class="text-xl p-1">💀</Button>
    </div>
    -->
    <div class="comment-section flex flex-col">
      <div class="flex items-center gap-2">
        {#if auth.pfp != "default.jpg"}
          <Avatar
            src={"https://fiatlinux.it/api/user_avatars/" + auth.pfp}
            alt={auth.name}
            class="cursor-pointer overflow-hidden h-10 min-w-10"
            on:click={() => {}}
          />
        {:else}
          <UserCircleSolid
            size="xl"
            class="cursor-pointer"
            on:click={() => {}}
          />
        {/if}
        <input
          type="text"
          placeholder="Comment"
          class="w-full p-2 rounded-lg border border-gray-300"
          bind:value={content}
        />
        <Button
          size="sm"
          color="alternative"
          class="text-md p-2  bg-fl_red"
          on:click={(element) => {
            insertComment(content, auth.id, post.id).then((response) => {
              if (response.status === 201) {
                getComments(post.id).then((response) => {
                  isCommentsVisible = true;
                  element.target.previousSibling.innerHTML = "Hide comments";
                  comments = response;
                });
              }
            });
          }}>👍</Button
        >
      </div>
      <hr class="mt-2 mb-2" />
      <div class="comments">
        <Button
          size="sm"
          color="light"
          class="text-sm p-1"
          on:click={(element) => {
            if (isCommentsVisible) {
              comments = [];
              element.target.innerHTML = "View comments";
              isCommentsVisible = false;
              return;
            } else {
              isCommentsVisible = true;
              getComments(post.id).then((response) => {
                comments = response;
                element.target.innerHTML = "Hide comments";
              });
            }
          }}
        >
          View comments
        </Button>
        {#each comments as comment}
          <Comment {comment}></Comment>
        {/each}
      </div>
    </div>
  </div></Card
>
