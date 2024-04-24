<script>
  // IMPORTS
  import { Input, Label, Helper, Button, Fileupload } from "flowbite-svelte";
  import { insertPost } from "./posts";
  import { CloseButton, Datepicker } from "flowbite-svelte";
  import Frasi from "./Frasi.svelte";
  import { currentPage } from "./currentPage";

  import { slide } from "svelte/transition";

  // VARIABLES
  let user = JSON.parse(localStorage.getItem("user"));
  let userID = user.id;
  let frase;
  let autore;
  let data;
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
      fetch("https://backend.fiatlinux.it/api/frasi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          frase,
          autore,
          aggiunto_da: user.name,
        }),
      }).then(() => {
        currentPage.set(Frasi);
      });
    }}
  >
    <h1 class="text-fl_gray">Nuova frase</h1>
    <CloseButton
      color="alternative"
      class="absolute top-0 right-0 bg-white"
      on:click={() => {
        currentPage.set(Frasi);
      }}
    />
    <div>
      <Label for="frase">Frase</Label>
      <Input
        id="frase"
        type="text"
        placeholder="Inserisci frase"
        bind:value={frase}
      />
    </div>

    <div>
      <Label for="autore">Autore</Label>
      <Input
        id="autore"
        type="text"
        placeholder="Inserisci autore"
        bind:value={autore}
      />
    </div>

    <div>
      <Label for="date">Data</Label>
      <input
        type="date"
        name="date"
        id="date"
        placeholder={new Date().toString()}
        bind:value={data}
      />
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
