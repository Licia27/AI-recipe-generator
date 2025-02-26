function displayRecipe(response) {
    console.log("recipe generated");
    new Typewriter("#recipe", {
        strings: [response.data.answer],
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generateRecipe(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "76f05ea98f32af77ecb47a06208dto32";
    let context ="you are a fan of good food and you like to generate quick and easy recipes of any meal,please be straight to the point";
    let prompt = `User instructions: Generate a simple and quick recipe for ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳Generating a recipe for ${instructionsInput.value}</div>`;

    axios.get(apiUrl).then(displayRecipe);

}
  
  let recipeFormElement = document.querySelector("#generate-recipe-form");
  recipeFormElement.addEventListener("submit", generateRecipe); 