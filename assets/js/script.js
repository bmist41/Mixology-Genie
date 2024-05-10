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
