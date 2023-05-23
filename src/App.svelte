<script>
  import RotatingRing from './components/RotatingRing.svelte';
  import ContentArea from './components/ContentArea.svelte';

  let runes = [
    { color: 'blue', image: '/assets/blue_rune.png' },
    { color: 'red', image: '/assets/red_rune.png' },
    { color: 'green', image: '/assets/green_rune.png' },
    { color: 'yellow', image: '/assets/yellow_rune.png' },
  ];
</script>

<style>
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
</style>

<div class="app">
  <RotatingRing {runes} />
  <ContentArea />
</div>
