function generateRecipe(event) {
    event.preventDefault();
  
    new Typewriter("#recipe", {
      strings: "Your generated recipe",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#recipe-generator-form");
  poemFormElement.addEventListener("submit", generateRecipe);