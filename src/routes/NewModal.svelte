<script>
  import { soundboards } from "./../soundboardsStore.js";
  import Modal from "./Modal.svelte";

  export let onNewModalOpened = false;
  export let currentSoundboardIndex = 0;

  let tabActive = 0;

  $: tabName = tabActive == 0 ? "Son" : "Soundboard";

  let name = "";
  let file;

  $: createBtnLabel = `Créer le ${tabName.toLocaleLowerCase()}${
    name ? " « " + name + " »" : ""
  }`;

  function onSubmit(event) {
    event.preventDefault();

    if (tabName == "Son") {
      $soundboards[currentSoundboardIndex].sounds.push({
        name,
        soundFile: "sounds/fart.wav",
      });
      soundboards.update((sbs) => sbs);
      onNewModalOpened = false;
    } else {
      $soundboards.push({
        name,
        sounds: [],
      });
      soundboards.update((sbs) => sbs);
      onNewModalOpened = false;
      currentSoundboardIndex = $soundboards.length - 1;
      tabActive = 0;
    }
    name = "";
    file = null;
  }
</script>

<Modal bind:modalOpened={onNewModalOpened}>
  <h1>Nouveau</h1>
  <div class="chooser">
    <span
      role={null}
      class:active={tabActive == 0}
      on:click={() => (tabActive = 0)}
    >
      Son
    </span>
    <span
      role={null}
      class:active={tabActive == 1}
      on:click={() => (tabActive = 1)}
    >
      Soundboard
    </span>
  </div>
  <form action={null} on:submit={onSubmit}>
    {#if tabName == "Son"}
      <div>
        <input
          type="text"
          placeholder="Nom"
          bind:value={name}
          autofocus={true}
          required={true}
          maxlength="50"
        />
        <input type="file" accept="audio/*" bind:value={file} required={true} />
      </div>
    {:else}
      <div>
        <input
          type="text"
          placeholder="Nom"
          bind:value={name}
          autofocus={true}
          required={true}
          maxlength="12"
        />
      </div>
    {/if}
    <input
      class:disabled={!name || (!file && tabName == "Son")}
      type="submit"
      value={createBtnLabel}
    />
  </form>
</Modal>

<style>
  h1 {
    font-weight: normal;
    font-size: 1em;
    color: #555;
    margin-bottom: 1em;
  }

  .chooser {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 1em 0;
  }

  span {
    padding: 0 0.75em;
    border-right: 1px solid #7d7d7d;
    cursor: pointer;
  }
  span:last-child {
    border-right: none;
  }
  span.active {
    color: #09b509;
    cursor: default;
    font-weight: bold;
  }
  span:hover {
    color: #09b509;
  }

  input {
    display: block;
    width: calc(100% - 0.5 * 2em);
    padding: 0.5em;
    margin-bottom: 1em;
    margin-top: 0.5em;
    border: 1px solid #7d7d7d;
    border-radius: 0.25em;
  }

  input[type="file"] {
    border: 1px solid #09b509;
  }

  input[type="submit"] {
    display: block;
    width: 100%;
    padding: 0.75em;
    margin-top: 2.5em;
    border: none;
    border-radius: 0.325em;
    background: #09b509;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
  }

  input[type="submit"].disabled {
    background: #09b509aa;
    cursor: default;
  }
</style>
