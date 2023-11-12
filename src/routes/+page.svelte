<script>
  import { soundboards } from "./../soundboardsStore.js";
  import NewModal from "./NewModal.svelte";
  import SoundboardsList from "./SoundboardsList.svelte";
  import SoundButton from "./SoundButton.svelte";
  import New from "./New.svelte";

  let currentSoundboardIndex = 0;

  async function onPlay(event) {
    console.log(event.detail);
    const audio = document.createElement("audio");
    audio.src = event.detail;
    await audio.play();
  }

  function onSwitchSoundboard(event) {
    currentSoundboardIndex = event.detail.index;
  }

  let onNewModalOpened = false;
  function onNew() {
    onNewModalOpened = true;
  }
</script>

<div class="app">
  <SoundboardsList
    bind:currentSoundboardIndex
    on:switchSoundboard={onSwitchSoundboard}
  />

  <div class="soundboard">
    {#each $soundboards[currentSoundboardIndex].sounds as sound}
      <SoundButton {sound} on:play={onPlay} />
    {/each}
  </div>

  <New on:new={onNew} />

  <NewModal bind:onNewModalOpened bind:currentSoundboardIndex />
</div>

<svelte:head>
  <title>Soundboard</title>
</svelte:head>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
  }

  .app {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .soundboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 0 1.5em;
    width: calc(100vw - 3em);
    max-height: 100vh;
    overflow-y: scroll;
    padding: 1em;
    user-select: none;
  }

  :global(.modal) ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0.5em 0;
  }

  :global(.modal) li {
    padding: 0 0.5em;
    border-right: 1px solid #7d7d7d;
  }
  :global(.modal) li:last-child {
    border-right: none;
  }
</style>
