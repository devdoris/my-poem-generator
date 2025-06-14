function displayPoem(response) {
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    });

}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    
    let apiKey = "5baff0a953ab57014b25c7222et9c7o4";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic text. Make sure to follow the user instructions.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiURL).then(displayPoem);



}

let poemFormElement = document.querySelector("#my-poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);