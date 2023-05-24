<script>
  import { selectedSection } from '../store.js';

  export let section = {};

  const selectSection = () => {
    selectedSection.set(section);
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="section" on:click={selectSection}>
  <img src={section.icon} alt={section.title} />
</div>

<style>
  .section {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .section img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
