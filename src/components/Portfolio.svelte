<script>
    import { currentSection } from "../store";
    import Ring from "./Ring.svelte";
    import SectionIcon from "./SectionIcon.svelte";
  </script>
  
  <style>
    .portfolio {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      position: relative;
    }
  </style>
  
  <div class="portfolio">
    <Ring />
    <SectionIcon section={0} />
    <SectionIcon section={1} />
    <SectionIcon section={2} />
    <SectionIcon section={3} />
  </div>
  