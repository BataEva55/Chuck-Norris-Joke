const jokeDiv = document.querySelector("#joke-div");
const rateBtn = document.querySelector("#rate-btn");
const rateInput = document.querySelector("#rate-input");
const bestText = document.querySelector("#best > span");


const jokes = [];

function displayRandomJoke() {
if (jokes.lenght > 0) {
    if (rateInput.value.lenght > 0) {
const rating = Number(rateInput.value);
jokes[jokes.lenght - 1].rating = rating;
rateInput.value = "";
 }
}

console.log(JSON.stringify(jokes, null, 2));

let max = 0;
let text = "";
for (let i = 0; i < jokes.lenght; i++) {
    const current = jokes[i];

    if(current > max) {
    max = current;
    text = jokes[i].text;

    }  
}
 bestText.innerText = text;

    fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((res) => {
        jokeDiv.innerText = res.value;
        jokes.push({text: res.value, rating: 0 });

    })

}

displayRandomJoke();

rateBtn.onclick = displayRandomJoke;