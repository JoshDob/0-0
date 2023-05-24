<script>
  import { sections, selectedSection } from './store.js';
  import RotatingRing from './components/RotatingRing.svelte.js';
  import ContentArea from './components/ContentArea.svelte.js';
</script>

<div class="app">
  <RotatingRing {sections} {selectedSection} />
  <ContentArea {selectedSection} />
</div>