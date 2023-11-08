<script>
  import AudioPlayer from "./AudioPlayer.svelte";
  import SoundButton from "./SoundButton.svelte";

  const sounds = [
    { name: "Fart", soundFile: "sounds/fart.wav" },
    { name: "Gay", soundFile: "sounds/gay.wav" },
    { name: "Ok", soundFile: "sounds/ok.wav" },
  ];

  let src = "";

  /**
   * @param {{ soundFile: string; }} event
   */
  function onPlay(event) {
    src = event.detail;
    document.getElementById("audio").play();
    console.log(src);
  }
</script>

<div class="soundboard">
  {#each sounds as sound}
    <SoundButton {sound} on:play={onPlay} />
  {/each}
</div>
<AudioPlayer {src} />
<svelte:head>
  <title>Soundboard</title>
</svelte:head>

<style>
  :global(*) {
    padding: 0;
    margin: 0;
  }

  .soundboard {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    max-height: calc(100vh - 3em);
    width: calc(100vw - 3em);
    margin: 1.5em;
  }

  #audio {
    display: none;
  }
</style>
