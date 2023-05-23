<script>
  import { sections } from '../store.js';
  import Section from './Section.svelte';
</script>

<div class="rotating-ring">
  {#each $sections as section (section.id)}
    <Section {section} />
  {/each}
</div>
