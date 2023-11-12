<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch("new");
  }
</script>

<div class="new" on:click={onClick}>
  <svg>
    <!-- create a "+" shape -->
    <line x1="0" y1="50%" x2="100%" y2="50%" />
    <line x1="50%" y1="0" x2="50%" y2="100%" />
  </svg>
</div>

<style>
  .new {
    position: fixed;
    bottom: 2em;
    right: 2em;
    background: linear-gradient(135deg, #3498db, #2980b9);
    border-radius: 50%;
    padding: 1.5em;
    font-size: 0.625em;
    box-shadow: 4px 4px 16px 5px rgba(0, 0, 0, 0.35);
    cursor: pointer;
  }

  .new:active {
    background: linear-gradient(135deg, #2980b9, #236fa5);
    scale: 0.95;
  }

  .new svg {
    width: 2.75em;
    height: 2.75em;
    stroke: #fff;
    stroke-width: 0.3em;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    cursor: pointer;
  }
</style>
