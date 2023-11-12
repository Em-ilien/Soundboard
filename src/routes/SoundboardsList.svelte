<script>
  import { soundboards } from "./../soundboardsStore.js";
  import { createEventDispatcher } from "svelte";

  export let currentSoundboardIndex;

  const dispatch = createEventDispatcher();
  function onClick(event, sb, index) {
    dispatch("switchSoundboard", {
      index,
      sb,
      event,
    });
  }
</script>

<div class="soundboards-list">
  {#each $soundboards as sb, index}
    <div
      class="soundboard"
      class:active={currentSoundboardIndex === index}
      on:click={(event) => onClick(event, sb, index)}
      on:keydown={(event) => onClick(event, sb, index)}
      role={null}
    >
      <span>{sb.name}</span>
    </div>
  {/each}
</div>

<style>
  .soundboards-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    width: fit-content;
    margin: 1.5em 1.5em 0 1em;
    width: 12em;
    user-select: none;
  }

  .soundboard {
    cursor: pointer;
    padding: 0.75em;
    border-radius: 0.5em;
  }
  .soundboard span {
    border-bottom: 2px dotted #000;
    padding-bottom: 0.125em;
  }
  .soundboard:hover {
    color: #09b509;
  }
  .soundboard:hover span {
    border-bottom: 2px dotted #09b509;
  }
  .soundboard.active {
    color: #09b509;
    box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, 0.1);
  }
  .soundboard.active span {
    border-bottom: 2px dotted #09b509;
  }
</style>
