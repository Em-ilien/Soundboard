<script>
  import { createEventDispatcher } from "svelte";

  export let sound = { name: "Fart", soundFile: "sounds/fart.wav" };

  const dispatch = createEventDispatcher();

  function onSoundButtonPlay() {
    dispatch("play", sound.soundFile);
  }
</script>

<button class="sound-button" on:click={onSoundButtonPlay}>{sound.name}</button>

<style>
  .sound-button {
    padding: 1em;
    margin: 0.75em 0;
    max-width: 15em;
    min-width: 10em;
    min-height: 2em;
    max-height: 5em;
    font-size: 1em;
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: #fff;
    border: none;
    cursor: pointer;
    flex: 1;
    border-radius: 0.5em;
    text-shadow: 1px 1px 1px #000;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .sound-button:hover {
    background: linear-gradient(135deg, #2980b9, #236fa5);
  }
</style>
