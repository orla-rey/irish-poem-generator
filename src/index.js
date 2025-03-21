function displayPoem(response) {

 console.log("poem generated");

   new Typewriter("#poem", {
     strings: [response.data.answer],
     autoStart: true,
     delay: 1,
     cursor: "",
   });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "1c21507bfe367ft66ea583e00ofa422f";
  let prompt = `User instructions are: Generate an Irish poem about ${promptInput.value}`;
  let context = "You are an Irish poem expert and love to write short poems. Your mission is to generate a short Irish Poem in basic HTML and separate each line with <br />. Make sure to follow the user instructions. Please do not generating anything mentioning HTML, only generate the poem. The poem doe not need to be in quotes at all. Please always include a title inside <strong> element.";
  let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class = "generating">⏳ Generating an Irish poem for you about ${promptInput.value}</div>`

  console.log("Generating Poem");  
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);

 
  
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
