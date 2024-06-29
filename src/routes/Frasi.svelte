<script>
  import { getFrasi } from "../lib/frasi.js";
  import Button from "../components/Button.svelte";
  import { onMount } from "svelte";

  let frasi = [];

  onMount(() => {
    getFrasi().then((data) => (frasi = data.reverse());
  });
</script>

<main>
  <table>
    <thead>
      <tr>
        <th>Frase</th>
        <th>Autore</th>
        <th>Categoria</th>
        <th>Data</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {#each frasi as frase}
        <tr>
          <td>{frase.frase}</td>
          <td>{frase.autore}</td>
          <td>{frase.categoria | ""}</td>
          <td>{frase.data.split("T")[0]}</td>
          <td><button>edit</button></td>
          <td><button class="delete">delete</button></td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<style>
  button {
    padding: 5px 7px;
    background-color: #e87461;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
  }

  .delete {
    background-color: red;
  }

  main {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    padding: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    min-width: 400px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    overflow: hidden;
  }

  thead tr {
    background-color: #e87461;
    color: #ffffff;
    text-align: left;
  }

  td,
  th {
    padding: 12px 15px;
  }

  tbody tr:nth-of-type(even) {
    background-color: #e6e5e5;
  }

  tbody tr:hover {
    background-color: #e87461;
  }

  .active-row {
    font-weight: bold;
    background-color: #e87461;
  }
</style>
