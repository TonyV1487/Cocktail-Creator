$(document).ready(function() {
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
});
