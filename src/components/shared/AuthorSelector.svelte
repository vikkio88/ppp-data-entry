<script lang="ts">
  import  { type Author, AUTHORS } from "../../libs/types";
  import { authorLabelMap } from "./author";

  type Props = {
    author?: Author;
    onChange?: (author: Author) => void;
  };

  const { author = "Other", onChange = console.log }: Props = $props();
  let selectedAuthor = $state(author);

  const handleChange = (e: Event) => {
    const newType = (e.target as HTMLSelectElement).value as Author;
    selectedAuthor = newType;
    onChange(newType);
  };
</script>

<div class="f r g aic">
  <select onchange={handleChange} bind:value={selectedAuthor}>
    {#each AUTHORS as a}
      <option value={a}>
        {authorLabelMap[a]}
      </option>
    {/each}
  </select>
  {#if selectedAuthor=== "Other"}
    <input type="text" placeholder="Other Author" />
  {/if}
</div>

<style>
  select {
    padding: 1rem 1.5rem;
    background-color: var(--main-bg-faint-color);
    color: var(--main-font-color);
    font-size: 1.2rem;
  }
</style>
