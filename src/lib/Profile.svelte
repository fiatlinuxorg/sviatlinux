<script>
  // IMPORTS
  import { currentPage } from "./currentPage";
  import { onMount } from "svelte";
  import Posts from "./Posts.svelte";
  import { Button } from "flowbite-svelte";
  import { EditOutline } from "flowbite-svelte-icons";
  // VARIABLES
  let user = JSON.parse(localStorage.getItem("user"));
  let name = user.name;
</script>

<div class="p-2">
  <h2 class="text-2xl font-bold">Profile</h2>
</div>
<div class="profile">
  <div class="profile-header bg-blue-950 rounded-2xl h-40 relative">
    <div
      class="profile-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="http://192.168.1.3:8000/api/user_avatars/godo.jpg"
        alt="profile"
        class="w-20 h-20 rounded-full"
      />
    </div>
  </div>
  <div class="profile-body p-2">
    <div class="flex">
      <div class="name">
        <p class="text-lg">{name}</p>
      </div>
      <div class="ml-4 flex items-center justify-center">
        <Button
          class="bg-transparent text-gray-500 rounded-full p-0 hover:bg-transparent"
          on:click={() => {
            document.querySelector(".name").innerHTML = `
            <Input
                id="name"
                type="text"
                class="rounded-md"
                bind:value={name}
                placeholder="Insert your name"
            />
            `;
          }}
        >
          <EditOutline class="w-6 h-6" />
        </Button>
      </div>
    </div>
  </div>
</div>

<style></style>
