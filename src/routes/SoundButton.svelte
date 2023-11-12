<script>
  import { createEventDispatcher } from "svelte";

  export let sound = { name: "", soundFile: "", key: "" };

  const dispatch = createEventDispatcher();

  function onSoundButtonPlay() {
    dispatch("play", sound.soundFile);
  }

  let active = false;
  function onKeydown(event) {
    if (sound.key !== event.key) return;

    dispatch("play", sound.soundFile);
    active = true;
    setTimeout(() => {
      active = false;
    }, 100);
  }
</script>

<button class:active class="sound-button" on:click={onSoundButtonPlay}>
  <span class="name">{sound.name}</span>
  {#if sound.key}
    <span class="key">{sound.key}</span>
  {/if}
</button>

<svelte:window on:keydown={onKeydown} />

<style>
  .sound-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em;
    margin: 0.75em 0;
    max-width: 15em;
    min-width: 10em;
    min-height: 2em;
    max-height: 5em;
    font-size: 1em;
    background: linear-gradient(135deg, #3498db, #2980b9);
    border: none;
    cursor: pointer;
    flex: 1;
    border-radius: 0.5em;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  }

  .sound-button:hover {
    background: linear-gradient(135deg, #2980b9, #236fa5);
  }

  .sound-button:active,
  .sound-button.active {
    background: linear-gradient(135deg, #236fa5, #1a5f91);
    scale: 0.95;
  }

  .sound-button .name {
    text-shadow: 1px 1px 1px #000;
    color: #fff;
  }

  .sound-button .key {
    font-size: 0.75em;
    color: #fff;
    background: #474e67;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    margin-right: 0.5em;
  }
</style>
