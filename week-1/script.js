//Add JavaScript here

const apiLink = "https://api.chucknorris.io/jokes/random";
const htmlText = document.getElementById("text");
const htmlImage = document.getElementById("image");
const nextJokeButton = document.getElementById("btn");

async function getRandomJoke() {
  try {
    const response = await fetch(apiLink);
    const apiResponse = await response.json();
    const joke = apiResponse.value;

    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const imagePath = `./images/chuck${randomNumber}.jpeg`;

    console.log(apiResponse);
    htmlText.innerHTML = joke;
    htmlImage.src = imagePath;
  } catch (error) {
    console.error("Error fetching Chuck Norris joke:", error);
  }
}

getRandomJoke();

nextJokeButton.addEventListener("click", getRandomJoke);
