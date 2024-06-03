<script>
  import { Router, Link, Route } from "svelte-routing";
  import Landing from "./routes/Landing.svelte";
  import Login from "./routes/Login.svelte"

  export let url = "";
</script>

<Router {url}>
  <Route path="/" component={Landing} />
  <Route path="/login" component={Login} />
</Router>

<style>
</style>
