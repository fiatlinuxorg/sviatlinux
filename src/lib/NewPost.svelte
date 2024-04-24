<script>
  // IMPORTS
  import { Input, Label, Helper, Button, Fileupload } from "flowbite-svelte";
  import { insertPost } from "./posts";
  import { CloseButton } from "flowbite-svelte";
  import Posts from "./Posts.svelte";
  import { currentPage } from "./currentPage";

  import { slide } from "svelte/transition";

  // FUNCTIONS
  let isImageValid = (image) => {
    const validTypes = [
      "image/svg+xml",
      "image/png",
      "image/jpeg",
      "image/gif",
    ];
    const validSize = 1024 * 1024 * 20; // 20MB
    if (!image) return true;
    if (!validTypes.includes(image[0].type)) return false;
    if (image[0].size > validSize) return false;
    return true;
  };

  let imgToBase64 = (img) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // VARIABLES
  let user = JSON.parse(localStorage.getItem("user"));
  let userID = user.id;
  let image;
  let isTitleValid = true;
  let isContentValid = true;
  let loading = false;
  let content;
  let title;
</script>

<div
  id="new-post"
  class="flex-col flex w-full items-center justify-center h-full relative"
  in:slide={{ duration: 500, axis: "y" }}
  out:slide={{ duration: 500, axis: "y" }}
>
  <form
    class="w-full lg:w-1/3 relative"
    on:submit|preventDefault={() => {
      if (loading) return;
      loading = true;
      isTitleValid = title && title.length > 3;
      if (!isTitleValid && !isImageValid(image)) return;
      if (image && isImageValid(image)) {
        imgToBase64(image[0]).then((base64) => {
          insertPost(title, content, userID, base64).then((response) => {
            if (response.status === 201) {
              currentPage.set(Posts);
            }
          });
        });
      } else {
        insertPost(title, content, userID, "").then((response) => {
          if (response.status === 201) {
            currentPage.set(Posts);
          }
        });
      }
    }}
  >
    <h1 class="text-fl_gray">New post</h1>
    <CloseButton
      color="alternative"
      class="absolute top-0 right-0 bg-white"
      on:click={() => {
        currentPage.set(Posts);
      }}
    />
    <div>
      <Label for="title">Title</Label>
      <Input
        id="title"
        type="text"
        placeholder="Insert the title"
        bind:value={title}
      />
      {#if !isTitleValid}
        <Helper type="error" color="red">Title is invalid</Helper>
      {/if}
    </div>

    <div>
      <Label for="image">Image</Label>
      <Fileupload id="image" bind:files={image} />
      <Helper>SVG, PNG, JPG or GIF</Helper>
      {#if !isImageValid(image)}
        <Helper type="error" color="red">Image is invalid</Helper>
      {/if}
    </div>

    <div>
      <Label for="content">Content</Label>
      <Input
        id="content"
        type="text"
        placeholder="Insert the content"
        bind:value={content}
      />
      {#if !isContentValid}
        <Helper type="error" color="red">Content is invalid</Helper>
      {/if}
    </div>

    <Button type="submit">Create post</Button>
  </form>
</div>

<style>
  form {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
