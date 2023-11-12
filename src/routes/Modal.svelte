<script>
  export let modalOpened = false;

  function onClose(event) {
    if (event.type === "keydown" && event.key !== "Escape") return;

    modalOpened = false;
  }
</script>

<svelte:body class:modal-opened={modalOpened} />

{#if modalOpened}
  <div
    class="modal"
    on:click|self={onClose}
    on:keydown={onClose}
    role={"dialog"}
  >
    <div>
      <slot />
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(0.5em);
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }

  .modal > div {
    background: #fff;
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: 2px 2px 6px 3px rgba(0, 0, 0, 0.25);
    width: 30em;
  }

  body.modal-opened {
    overflow: hidden;
  }
</style>
