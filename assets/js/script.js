let currentDrinkName = '';
const containerEl = document.querySelector('#container');
const generateRandomDrinkButton = document.querySelector('#random-drink-button');
const showMeHowButton = document.querySelector('#show-me-how-button');
showMeHowButton.addEventListener('click', function(event) {
  // Prevent the default action (modal triggering)
  event.preventDefault();
const searchedDrink = localStorage.getItem("currentDrink")
  // Execute the function before displaying the modal
   searchYouTube(searchedDrink);
  
  // Allow the modal to be shown by triggering the modal manually
});

const url = 'https://the-cocktail-db3.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd677d947f1msh7cb3b796a5a4ae5p1eed4ejsnff4fd0c0febf',
		'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
	}
};
let response = null;

let drinkNames = []

//Adding api information for YouTube search

function createSearchUrl(query) {
  const drinkRecipe = `recipe for ${query}`
  const baseUrl = 'https://youtube138.p.rapidapi.com/search/';
  const url = `${baseUrl}?q=${encodeURIComponent(drinkRecipe)}&hl=en&gl=US`;

  const optionsSearch = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '54be3dccb2msh451aa41638491b3p1839bcjsnb41828dbc0fd',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  return { url, optionsSearch };
}

async function searchYouTube(searchValue) {  
  console.log("search value", searchValue)
  const { url, optionsSearch } = createSearchUrl(searchValue);
  
  try {
    const response = await fetch(url, optionsSearch);
    const data = await response.json();
    displayResults(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayResults(data) {
  const resultsDiv = document.getElementById('videolink');
      resultsDiv.innerHTML = '';
console.log(data) 
      if (data.contents && data.contents.length > 0) {
        const video = data.contents[0].video;
        console.log(video)
        if (video) {
          const videoElement = document.createElement('div');
          videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <p>${video.descriptionSnippet}</p>
            <a href="https://www.youtube.com/watch?v=${video.videoId}" target="_blank">Watch</a>
          `;
          resultsDiv.appendChild(videoElement);
        } else {
          resultsDiv.innerHTML = 'No video found';
        }
      } else {
        resultsDiv.innerHTML = 'No results found';
      }
}

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
  
  //this will clear the previous title and image when the button is clicked again.
  containerEl.innerHTML = "";

  //this will use the random index to get the title and image to append to the DOM
  drinkTitleEl.textContent = randomDrink.title;
  drinkImageEl.src = `https://apipics.s3.amazonaws.com/coctails_api/${randomDrink.id}.jpg`;

  drinkImageEl.style.maxWidth = '100%';
  drinkImageEl.style.maxHeight = '100%';
  drinkImageEl.style.width = 'auto';
  drinkImageEl.style.height = 'auto';
  
  containerEl.append(drinkTitleEl);
  containerEl.append(drinkImageEl);

  drinkNames.push({drinkName: randomDrink.title});

  localStorage.setItem('drinkNames', JSON.stringify(drinkNames));
  localStorage.setItem("currentDrink", JSON.stringify(randomDrink.title))
  
  currentDrinkName = 
  showMeHowButton.style.display = 'inline-block';
} catch (error) {
	console.error(error);
}}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});


//clicking on generate random drink will call the getRandomDrink function
generateRandomDrinkButton.addEventListener('click', getRandomDrink);

//function renderResult