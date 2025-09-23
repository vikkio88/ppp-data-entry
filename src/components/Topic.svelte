<script lang="ts">
  import { strings } from "../data/strings";
  import AuthorSelector from "./shared/AuthorSelector.svelte";
  import Fette from "./shared/Fette.svelte";
  import TopicCmd from "./shared/TopicCmd.svelte";
  type Props = {
    title: string;
    onAdd: () => void;
    onCancel: () => void;
    hasPizza?: boolean;
  };

  const { title, onAdd, onCancel, hasPizza = false }: Props = $props();

  function onAddInternal() {
    onAdd();
  }
  function onCancelInternal() {
    onCancel();
  }
</script>

<div class="f1 f c pd g">
  <h3>{strings.collecting.adding}{title}</h3>
  <AuthorSelector author="Lorro" />
  <input type="text" placeholder={strings.collecting.description} />
  {#if hasPizza}
    <Fette />
  {/if}
</div>
<TopicCmd onAdd={onAddInternal} onCancel={onCancelInternal} />
