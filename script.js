$(document).ready(function() {
  var liquorList = ['test1', 'test2'];
  var ingredientList = ['ing1', 'ing2'];

  function displayLiquor() {
    for (i = 0; i < liquorList.length; i++) {
      var liquorItem = liquorList[i];
      $('#liquor').append(`<input type="checkbox">${liquorItem}<br>`);
      console.log(liquorItem);
    }
  }

  function displayIngredients() {
    for (i = 0; i < ingredientList.length; i++) {
      var ingredientItem = ingredientList[i];
      $('#ingredients').append(`<input type="checkbox">${ingredientItem}<br>`);
      console.log(ingredientItem);
    }
  }

  function searchIngredient(ingredient) {
    var queryUrl =
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient;

    $.ajax({
      url: queryUrl,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
    });
  }
  $('#searchBtn').on('click', function() {
    var ingredient = $('#userIngredient').val();
    searchIngredient(ingredient);
  });
  displayLiquor();
  displayIngredients();
});
