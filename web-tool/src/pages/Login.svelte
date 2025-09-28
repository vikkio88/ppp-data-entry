<script lang="ts">
  import { strings } from "../data/strings";
  import app from "../store/app.svelte";

  let name = $state("");
  let episode = $state("");

  function isValid(name: string, episodeStr: string) {
    const episodeNum = Number(episodeStr);
    return name.length > 2 && !isNaN(episodeNum) && episodeNum > 0;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (!isValid(name, episode)) return;
    app.startSession({ user: name, episode: Number(episode) });
    app.next();
  }
</script>

<main class="f1 f cc">
  <h3>{strings.login.title}</h3>
  <form onsubmit={handleSubmit}>
    <input
      required
      type="number"
      bind:value={episode}
      placeholder={strings.login.episodeNumber}
    />
    <input
      required
      type="text"
      bind:value={name}
      placeholder={strings.login.name}
    />
    <button>{strings.globals.next}</button>
  </form>
</main>

<style>
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 1.2rem;
  }
  form > button {
    padding: 1.2rem;
  }
</style>
