<script>
  // IMPORTS
  import { Input, Label, Helper, Button, Fileupload } from "flowbite-svelte";
  import { insertPost } from "./posts";

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
  let content;
  let title;
</script>

<div
  id="new-post"
  class="container flex flex-col justify-center items-center gap-8 p-8 lg:top-16 bg-white h-2/3 rounded-lg shadow"
>
  <h1>New post</h1>
  <form
    on:submit|preventDefault={() => {
      isTitleValid = title && title.length > 3;
      if (!isTitleValid && !isImageValid(image)) return;
      console.log(image[0]);
      imgToBase64(image[0]).then((base64) => {
        console.log(base64);
        insertPost(title, content, userID, base64);
      });
    }}
  >
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
