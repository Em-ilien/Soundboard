<script>
  import { createEventDispatcher } from "svelte";

  export let soundboards = [];
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
  {#each soundboards as sb, index}
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5em;
    justify-content: center;
    align-items: flex-start;
    width: fit-content;
    margin: 1.5em;
  }

  .soundboard {
    cursor: pointer;
    border-bottom: 3px dotted #000;
    padding-bottom: 0.125em;
  }
  .soundboard.active {
    border-color: #09b509;
    color: #09b509;
  }
</style>
