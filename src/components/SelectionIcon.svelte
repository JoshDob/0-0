<script>
    import { currentSection } from "../store";
    export let section = 0;
    let isActive = false;
  
    currentSection.subscribe((value) => {
      isActive = section === value;
    });
  
    function activateSection() {
      currentSection.set(section);
    }
  </script>
  
  <style>
    .section-icon {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #61dafb;
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
  
    .section-icon.active {
      opacity: 1;
    }
  </style>
  
  <div
    class="section-icon {isActive ? 'active' : ''}"
    on:click={activateSection}
  ></div>
  