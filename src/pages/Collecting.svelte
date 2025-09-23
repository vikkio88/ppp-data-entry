<script lang="ts">
  import BaseTopic from "../components/Topic.svelte";
  import Entry from "../components/Entry.svelte";
  import { t, strings } from "../data/strings";
  import type { CollectionType } from "../libs/types";
  import app from "../store/app.svelte";
  let isEnteringData = $state(false);
  let collectionType: CollectionType | undefined = $state();
  function add(c: CollectionType) {
    isEnteringData = true;
    collectionType = c;
  }
  function cancel() {
    isEnteringData = false;
    collectionType = undefined;
  }

  const addCommands = [
    {
      label: `${strings.collecting.menews} 📰`,
      command: () => add("menews"),
    },
    {
      label: `${strings.collecting.lorrowap} ⏪`,
      command: () => add("lorrowap"),
    },
    {
      label: `${strings.collecting.main} 🍕`,
      command: () => add("main"),
    },
  ];
</script>

<main class="f1 f c">
  <h1>{t(strings.collecting.title, { episode: app.meta?.episode ?? 0 })}</h1>

  {#if isEnteringData && collectionType}
    <Entry type={collectionType} onCancel={cancel} />
  {:else}
    <div class="f1"></div>
    <div class="cmd add">
      {#each addCommands as c}
        <button class="i-btn" onclick={c.command}>
          <span>{c.label}</span>
          <span class="action">➕</span>
        </button>
      {/each}
    </div>
    <div class="cmd">
      <button class="i-btn danger" onclick={() => app.next()}>
        {strings.globals.stop}<span>🛑</span>
      </button>
    </div>
  {/if}
</main>

<style>
  .add > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
  }
</style>
