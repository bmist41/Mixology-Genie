
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  // Or with jQuery

  
document.addEventListener('DOMContentLoaded', function() {
  var generateCocktailButton = document.querySelector('.modal-trigger');
  

  generateCocktailButton.addEventListener('click', function() {
      console.log('Generating cocktail...');
  });
});

const randomDrink = document.getElementById('recipe')
const apiKey =


document.addEventListener('DOMContentLoaded', function () {
 var elems = document.querySelectorAll('.modal');
 var instances = M.Modal.init(elems);
});


// Select the cocktail difficulty




// Fetches List of Cockttail
const fetch = require('node-fetch');
const url = 'https://the-cocktail-db3.p.rapidapi.com/';
const options = {
 method: 'GET',
 headers: {
   'X-RapidAPI-Key': '57c841a005mshc0c50a72287dcbfp1af0d7jsndebd94de3a30',
   'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
 }
};


try {
 const response = await fetch(url, options);
 const result = await response.text();
 console.log(result);
} catch (error) {
 console.error(error);
}
// Fetchs Recipie of a cocktail from that array
const fetch = require('node-fetch');


const url = 'https://the-cocktail-db3.p.rapidapi.com/45';
const options = {
 method: 'GET',
 headers: {
   'X-RapidAPI-Key': '57c841a005mshc0c50a72287dcbfp1af0d7jsndebd94de3a30',
   'X-RapidAPI-Host': 'the-cocktail-db3.p.rapidapi.com'
 }
};


try {
 const response = await fetch(url, options);
 const result = await response.text();
 console.log(result);
} catch (error) {
 console.error(error);
}

