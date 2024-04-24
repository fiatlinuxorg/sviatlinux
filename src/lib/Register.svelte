<script>
  // IMPORTS
  import { register } from "./auth.js";
  import { Input, Label, Helper, Button } from "flowbite-svelte";

  // VARIABLES
  let name;
  let email;
  let password;
  let isNameValid = true;
  let isEmailValid = true;
  let isPasswordValid = true;
  let show = false;
  let error;
  //!localStorage.getItem("user")
</script>

<div class="flex w-full items-center justify-center h-full">
  <div class="w-1/2 h-full overflow-hidden rounded-l-xl hidden lg:block">
    <div class="w-full h-1/4 bg-fl_gray rounded-r-xl"></div>
    <div class="w-5/6 h-1/4 bg-fl_red rounded-br-xl"></div>
    <div class="w-2/3 h-1/4 bg-fl_orange rounded-br-xl"></div>
    <div class="w-1/2 h-1/4 bg-fl_yellow rounded-br-xl"></div>
  </div>
  <div class="w-full lg:w-1/2 h-full flex justify-center">
    <div class="flex flex-col justify-center w-full gap-8 p-8 lg:w-2/3">
      <h1 class="text-fl_gray">Register</h1>
      <form
        on:submit|preventDefault={() => {
          isNameValid = name && name.length > 5;
          isEmailValid = email && email.includes("@");
          isPasswordValid = password && password.length > 6;
          if (!isEmailValid || !isPasswordValid) return;
          let error = register(name, email, password);
        }}
      >
        {#if error}
          <Helper type="error" color="red">{error}</Helper>
        {/if}
        <div>
          <Label for="name">Name</Label>
          <Input id="name" bind:value={name} placeholder="Insert your name" />
          {#if !isNameValid}
            <Helper type="error" color="red">Name is invalid</Helper>
          {/if}
        </div>
        <div>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            bind:value={email}
            placeholder="Insert your email"
          />
          {#if !isEmailValid}
            <Helper type="error" color="red">Email is invalid</Helper>
          {/if}
        </div>
        <div>
          <Label for="password">Your password</Label>
          <Input
            id="password"
            bind:value={password}
            type={show ? "text" : "password"}
            placeholder="Insert your password"
          />
          {#if !isPasswordValid}
            <Helper type="error" color="red">Password is invalid</Helper>
          {/if}
        </div>
        <Button type="submit" class="bg-fl_orange">Register</Button>
      </form>
    </div>
  </div>
</div>

<style>
  form {
    max-width: 1080px;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
