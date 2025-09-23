<script lang="ts">
  import { strings } from "../data/strings";
  import type { CollectionType } from "../libs/types";
  import Topic from "./Topic.svelte";

  type Props = {
    type: CollectionType;
    onCancel: () => void;
  };

  const { type, onCancel }: Props = $props();

  function onAdd() {
    console.log("Adding");
    onCancel();
  }
</script>

{#if type === "lorrowap"}
  <Topic {onAdd} {onCancel} title={strings.collecting.lorrowap} />
{:else if type === "menews"}
  <Topic {onAdd} {onCancel} title={strings.collecting.menews} />
{:else}
  <Topic {onAdd} {onCancel} title={strings.collecting.main} hasPizza />
{/if}
