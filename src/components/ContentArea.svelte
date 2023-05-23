<script>
  import { selectedSection } from '../store.js';
</script>

<div class="content-area">
  {#if $selectedSection}
    <h2>{$selectedSection.title}</h2>
    <p>{$selectedSection.content}</p>
  {/if}
</div>
