<script>
  import Section from './Section.svelte';
  export let runes;
</script>

<style>
  .ring {
    display: flex;
    justify-content: space-around;
    width: 300px;
    height: 300px;
    border: 1px solid black;
    border-radius: 50%;
    padding: 50px;
  }
</style>

<div class="ring">
  {#each runes as rune}
    <Section {rune} />
  {/each}
</div>
