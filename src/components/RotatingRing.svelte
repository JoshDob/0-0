<script>
  import { onMount } from 'svelte';
  import Section from './Section.svelte';
  import { sections, selectedSection } from '../store.js';

  let selected = null;

  $: selectedSection.set(selected);
</script>

<div class="ring">
  {#each $sections as section (section.id)}
    <Section {section} on:click={() => (selected = section)} />
  {/each}
</div>
