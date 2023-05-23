<script>
  let selectedRune;

  function handleSelect(event) {
    selectedRune = event.detail;
  }
</script>

<style>
  .content-area {
    width: 200px;
    height: 200px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="content-area" on:select={handleSelect}>
  {#if selectedRune}
    <p>Selected rune: {selectedRune}</p>
  {:else}
    <p>No rune selected</p>
  {/if}
</div>
