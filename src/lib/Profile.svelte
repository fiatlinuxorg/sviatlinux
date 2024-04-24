<script>
  // IMPORTS
  import { currentPage } from "./currentPage";
  import { onMount } from "svelte";
  import Login from "./Login.svelte";
  import { Input, Button, Alert, Fileupload } from "flowbite-svelte";
  import { logout, update } from "./auth";

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
  let name = user.name;
  let email = user.email;
  let image;
  let isNameValid = true;
  let isEmailValid = true;
  let alert;
</script>

<div class="p-2">
  <h2 class="text-2xl font-bold">Profile</h2>
</div>
<div class="profile lg:p-20">
  <div class="profile-header bg-fl_gray rounded-2xl h-40 relative">
    <div
      class="profile-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src={"https://backend.fiatlinux.it/api/user_avatars/" + user.pfp}
        alt="profile"
        class="w-20 h-20 rounded-full"
      />
    </div>
  </div>
  <div class="profile-body p-2">
    <div class="flex flex-col">
      <div class="flex items-center justify-between">
        <h2 class="text-xl">Name</h2>
      </div>
      <div class="flex items-center justify-center">
        <Input bind:value={name} />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-between">
        <h2 class="text-xl">Email</h2>
      </div>
      <div class="flex items-center justify-center">
        <Input bind:value={email} />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center justify-between">
        <h2 class="text-xl">Change profile picture</h2>
      </div>
      <div class="flex items-center justify-center">
        <Fileupload
          on:change={(e) => {
            image = e.target.files;
          }}
        >
          <Button size="sm" class="bg-fl_orange">Upload</Button>
        </Fileupload>
      </div>
    </div>
    <div class="flex">
      <Button
        size="sm"
        class="mt-2 bg-fl_orange"
        on:click={() => {
          isNameValid = name && name.length > 5;
          isEmailValid = email && email.includes("@");
          if (!isNameValid || !isEmailValid || !isImageValid(image)) {
            alert = 1;
            return;
          }
          alert = 0;
          imgToBase64(image[0]).then((img) => {
            update(name, email, img).then((response) => {
              console.log(response);
            });
          });
        }}
      >
        Save
      </Button>
      <Button
        size="sm"
        class="mt-2 ms-2 bg-fl_red"
        on:click={() => {
          logout().then((response) => {
            localStorage.clear();
            currentPage.set(Login);
          });
        }}
      >
        Logout
      </Button>
    </div>
    {#if alert === 1}
      <Alert type="error" color="red">Invalid name or email</Alert>
    {:else if alert === 0}
      <Alert type="success" color="green">Profile updated</Alert>
    {/if}
  </div>
</div>

<style></style>
