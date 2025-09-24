<script lang="ts">
  import { toTimestapLabel } from "../../libs/formatters";

  let hasTime = $state(false);
  let hours = $state(0);
  let minutes = $state(0);
  let seconds = $state(0);

  let timeLabel = $derived(toTimestapLabel(hours, minutes, seconds));
</script>

<article class="f c g aic">
  <div class="f r g">
    <h3>⏱️ Timestamp</h3>
    <input type="checkbox" bind:checked={hasTime} />
  </div>
  {#if hasTime}
    <div class="controls">
      <span class="timeLabel">{timeLabel}</span>
    </div>
    <div class="controls w100 g">
      <input type="number" min="0" max="100" bind:value={hours} />h
      <input type="number" min="0" max="59" bind:value={minutes} />m
      <input type="number" min="0" max="59" bind:value={seconds} />s
    </div>
  {/if}
</article>

<style>
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
  }
  .controls > input {
    padding: 1rem;
  }
  .timeLabel {
    font-weight: 700;
    font-size: 3rem;
    font-variant-numeric: tabular-nums;
    color: var(--main-font-color);
  }
</style>
