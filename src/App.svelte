<script>
  import { onMount } from "svelte";
  import { currentSection } from "./store";
  import Portfolio from "./components/Portfolio.svelte";
  import ContentArea from "./components/ContentArea.svelte";

  let section = 0;

  onMount(() => {
    currentSection.subscribe((value) => {
      section = value;
    });
  });
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
  }
</style>

 <div class="app">
  <Portfolio />
  <ContentArea {section} />
 </div>