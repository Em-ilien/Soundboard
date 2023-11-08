<script>
  import SoundboardsList from "./SoundboardsList.svelte";
  import AudioPlayer from "./AudioPlayer.svelte";
  import SoundButton from "./SoundButton.svelte";

  $: sounds = soundboards[currentSoundboardIndex].sounds;

  let currentSoundboardIndex = 0;
  let soundboards = [
    {
      name: "Default",
      sounds: [
        { name: "Fart", soundFile: "sounds/fart.wav" },
        { name: "Gay", soundFile: "sounds/gay.wav" },
        { name: "Ok", soundFile: "sounds/ok.wav" },
      ],
    },
    {
      name: "Second",
      sounds: [
        { name: "Second 1", soundFile: "sounds/fart.wav" },
        { name: "Second 2", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
        { name: "Other one very long", soundFile: "sounds/fart.wav" },
      ],
    },
  ];

  let src = "";

  /**
   * @param {{ soundFile: string; }} event
   */
  function onPlay(event) {
    src = event.detail;
    document.getElementById("audio").play();
  }

  function onSwitchSoundboard(event) {
    currentSoundboardIndex = event.detail.index;
  }
</script>

<div class="app">
  <SoundboardsList
    {soundboards}
    bind:currentSoundboardIndex
    on:switchSoundboard={onSwitchSoundboard}
  />

  <div class="soundboard">
    {#each sounds as sound}
      <SoundButton {sound} on:play={onPlay} />
    {/each}
  </div>

  <AudioPlayer {src} />
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .soundboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    align-items: stretch;
    max-height: calc(100vh - 3em);
    width: calc(100vw - 3em);
    margin: 1.5em;
  }
</style>
