<script>
  import { selectedSection } from '../store.js';
  export let section;
</script>

<div class="section" on:click={() => $selectedSection = section}>
  <img src={section.icon} alt={section.title} />
</div>
