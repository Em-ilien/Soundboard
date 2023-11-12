<script>
  import Soundboard from "./Soundboard.svelte";

  import { soundboards } from "./../soundboardsStore.js";
  import NewModal from "./NewModal.svelte";
  import SoundboardsList from "./SoundboardsList.svelte";
  import SoundButton from "./SoundButton.svelte";
  import New from "./New.svelte";

  let currentSoundboardIndex = 0;

  function onPlay(event) {
    console.log(event.detail);
    const sound = new Audio(event.detail);
    sound.play();
  }

  function onSwitchSoundboard(event) {
    currentSoundboardIndex = event.detail.index;

    const uniqueSoundFilesSet = new Set();
    const soundsFiles = $soundboards[currentSoundboardIndex].sounds.filter(
      (sound) => {
        if (uniqueSoundFilesSet.has(sound.soundFile)) {
          return false;
        }
        uniqueSoundFilesSet.add(sound.soundFile);
        return true;
      }
    );

    soundsFiles.forEach((file) => {
      fetch(file.soundFile);
    });
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

  <Soundboard {currentSoundboardIndex} />

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
</style>
