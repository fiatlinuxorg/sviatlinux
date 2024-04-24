<script>
  // IMPORTS
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Checkbox,
    TableSearch,
  } from "flowbite-svelte";
  import { onMount } from "svelte";
  import { Button } from "flowbite-svelte";
  import NewFrase from "./NewFrase.svelte";
  import { currentPage } from "./currentPage";

  // FUNCTIONS
  const getFrasi = async () => {
    const response = await fetch("https://backend.fiatlinux.it/api/frasi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    return data;
  };

  // VARIABLES

  let frasi = [];

  onMount(() => {
    getFrasi().then((data) => {
      frasi = data;
    });
  });
</script>

<Table divClass="relative">
  <TableHead>
    <TableHeadCell>Frase</TableHeadCell>
    <TableHeadCell>Autore</TableHeadCell>
    <TableHeadCell>Categoria</TableHeadCell>
    <TableHeadCell>Data</TableHeadCell>
    <TableHeadCell>
      <Button
        on:click={() => {
          currentPage.set(NewFrase);
        }}>Add</Button
      >
    </TableHeadCell>
  </TableHead>
  <TableBody>
    {#each frasi as frase}
      <TableBodyRow>
        <TableBodyCell>{frase.frase}</TableBodyCell>
        <TableBodyCell>{frase.autore}</TableBodyCell>
        <TableBodyCell></TableBodyCell>
        <TableBodyCell>{frase.data.split("T")[0]}</TableBodyCell>
        <TableBodyCell></TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</Table>

<style>
</style>
