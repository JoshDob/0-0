<script>
  import { selectedSection } from '../store.js';

  let selected = null;

  selectedSection.subscribe(value => {
    selected = value;
  });
</script>

<div class="content-area">
  {#if selected}
    <h2>{selected.title}</h2>
    <p>{selected.content}</p>
    <img src={selected.icon} alt={selected.title} />
  {:else}
    <p>Select a section to view its content.</p>
  {/if}
</div>

<style>
  .content-area {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .content-area img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
