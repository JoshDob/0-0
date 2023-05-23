<script>
    import { currentSection } from "../store";
    let section = 0;
  
    currentSection.subscribe((value) => {
      section = value;
    });
  </script>
  
  <style>
    .ring {
      width: 500px;
      height: 500px;
      border: 2px solid #61dafb;
      border-radius: 50%;
      position: relative;
    }
  </style>
  
  <div class="ring"></div>
  