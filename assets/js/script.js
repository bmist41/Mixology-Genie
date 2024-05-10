const containerEl = document.querySelector('#container');

const url = 'https://the-cocktail-db3.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd677d947f1msh7cb3b796a5a4ae5p1eed4ejsnff4fd0c0febf',
		'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
	}
};
let response = null;


//store id in here
async function getRandomDrink() {
try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  //generate random index 
  let randomIndex = Math.floor(Math.random() * result.length);
  //check to see if the index is 18, if it is get another random index
  while (randomIndex === 18) {
    randomIndex = Math.floor(Math.random() * result.length);
  }
  //set randomDrink to the result with the randomIndex
  const randomDrink = result[randomIndex];

  const drinkTitleEl = document.createElement('h2');
  const drinkImageEl = document.createElement('img');
  //this will use the random index to get the title and image to append to the DOM
  drinkTitleEl.textContent = randomDrink.title;
  drinkImageEl.src = `https://apipics.s3.amazonaws.com/coctails_api/${randomDrink.id}.jpg`;

  containerEl.append(drinkTitleEl);
  containerEl.append(drinkImageEl);

} catch (error) {
	console.error(error);
}}
getRandomDrink();

//function renderResult

//pass the id through the apiURL
//if extra time we can add the recipe from a second api call on the cocktail db api
// async function renderDrinkId (id) {
//   try {
//     const response = await fetch(`https://the-cocktail-db3.p.rapidapi.com/1`, options);
//     const result = await response.text();
//     console.log(result);
//     //response = result;
//     //invoke function to render result
//   } catch (error) {
//     console.error(error);
//   }}
// renderDrinkId();

//activate modal

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});


document.addEventListener('DOMContentLoaded', function() {
  const generateCocktailButton = document.querySelector('.modal-trigger');
  

  generateCocktailButton.addEventListener('click', function() {
      console.log('Generating cocktail...');
  });
});
