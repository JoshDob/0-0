<script>
  import { createEventDispatcher } from 'svelte';
  export let rune;

  const dispatch = createEventDispatcher();

  function selectRune() {
    dispatch('select', rune);
  }
</script>

<style>
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
</style>

<img src={rune} on:click={selectRune} />
