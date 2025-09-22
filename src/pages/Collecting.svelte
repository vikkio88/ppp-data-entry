<script lang="ts">
  import { t, strings } from "../data/strings";
  import app from "../store/app.svelte";
</script>

<main class="f1 f c">
  <h3>{t(strings.collecting.title, { episode: app.meta?.episode ?? 0 })}</h3>
  <div class="f1"></div>
  <div class="cmd add">
    <button class="i-btn">
      <span>{strings.collecting.menews} 📰</span>
      <span class="action">➕</span>
    </button>
    <button class="i-btn">
      <span>
        {strings.collecting.lorrowap}
        ⏪
      </span>
      <span class="action">➕</span>
    </button>
    <button class="i-btn">
      <span>
        {strings.collecting.main}
        🍕</span
      >
      <span class="action">➕</span>
    </button>
  </div>
  <div class="cmd">
    <button class="i-btn stop" onclick={() => app.next()}>
      {strings.globals.stop}<span>🛑</span>
    </button>
  </div>
</main>

<style>
  .cmd {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1.4rem;
  }
  .cmd > button {
    padding: 1.3rem;
    flex: 1;
  }

  .stop:hover {
    background-color: var(--danger-faint-color);
  }

  .add > button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
  }
</style>
