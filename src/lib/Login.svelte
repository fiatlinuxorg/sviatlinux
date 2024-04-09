<script>
  // IMPORTS
  import { login } from "./auth.js";
  import { Input, Label, Helper, Button } from "flowbite-svelte";

  // VARIABLES
  let email;
  let password;
  let isEmailValid = true;
  let isPasswordValid = true;
  let show = false;
  let error;
  //!localStorage.getItem("user")
</script>

<div class="container flex flex-col justify-center w-full gap-8 p-8">
  <h1>Login</h1>
  <form
    on:submit|preventDefault={() => {
      isEmailValid = email && email.includes("@");
      isPasswordValid = password && password.length > 6;
      if (!isEmailValid || !isPasswordValid) return;
      let error = login(email, password);
    }}
  >
    {#if error}
      <Helper type="error" color="red">{error}</Helper>
    {/if}
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
    <Button type="submit">Login</Button>
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
