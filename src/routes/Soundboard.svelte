<script>
  import { soundboards } from "../soundboardsStore.js";
  import SoundButton from "./SoundButton.svelte";

  export let currentSoundboardIndex = 0;

  function onPlay(event) {
    console.log(event.detail);
    const sound = new Audio(event.detail);
    sound.play();
  }
</script>

<div class="soundboard">
  {#each $soundboards[currentSoundboardIndex].sounds as sound}
    <SoundButton {sound} on:play={onPlay} />
  {/each}
</div>

<style>
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
</style>
