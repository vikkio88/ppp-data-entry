<script lang="ts">
  type Props = { max?: number; size?: number };
  const { max = 10, size = 96 }: Props = $props();
  let value = $state(5);
  let pct = $derived(Math.max(0, Math.min(1, value / max)));
  let angle = $derived(pct * 360);
</script>

<div class="spinner" style="width:{size}px; height:{size}px">
  <div
    class="ring"
    style="background: conic-gradient(#ffd700 {angle}deg, #eee 0deg)"
  ></div>
  <div class="center">{value} / {max}</div>
</div>
<div class="controls">
  <label for="pizza">{value} / {max}</label>
  <input name="pizza" type="range" min="0" {max} bind:value />
</div>

<style>
  .controls {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .spinner {
    position: relative;
    border-radius: 50%;
    display: inline-block;
  }
  .ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
  }
  .ring::before {
    content: "";
    position: absolute;
    inset: 12%;
    background-color: var(--main-bg-faint-color);
    border-radius: 50%;
  }
  .center {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: var(--main-font-color);
  }
</style>
