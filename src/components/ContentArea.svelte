<script>
    import { currentSection } from "../store";
    let section = 0;
  
    currentSection.subscribe((value) => {
      section = value;
    });
  </script>
  
  <style>
    .content-area {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #282c34;
    }
  </style>
  
  <div class="content-area">
    <h1>Section {section}</h1>
  </div>