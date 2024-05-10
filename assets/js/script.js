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

  const drinkTitleEl = document.createElement('h2');

  drinkTitleEl.textContent = result[0].title;
  
  containerEl.append(drinkTitleEl);

} catch (error) {
	console.error(error);
}}
getRandomDrink();
//function renderResult

//pass the id through the apiURL
async function renderDrinkId (id) {
  try {
    const response = await fetch(`https://the-cocktail-db3.p.rapidapi.com/1`, options);
    const result = await response.text();
    console.log(result);
    //response = result;
    //invoke function to render result
  } catch (error) {
    console.error(error);
  }}
renderDrinkId();

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
