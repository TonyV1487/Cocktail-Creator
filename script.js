$(document).ready(function() {
  var ingredientList = [
    'Sweet Vermouth',
    'Orange bitters',
    'Dry Vermouth',
    'Tea',
    'Bitters',
    'Sugar',
    'demerara Sugar',
    'Dubonnet Rouge',
    'Lime juice',
    'Carbonated water',
    'Grenadine',
    'Grapefruit juice',
    'Apple juice',
    'Pineapple juice',
    'Lemon juice',
    'Sugar syrup',
    'Milk',
    'Strawberries',
    'Chocolate syrup',
    'Yogurt',
    'Mango',
    'Ginger',
    'Lime',
    'Cantaloupe',
    'Berries',
    'Grapes',
    'Kiwi',
    'Tomato juice',
    'Cocoa powder',
    'Chocolate',
    'Heavy cream',
    'Galliano',
    'Coffee',
    'Water',
    'Espresso',
    'Angelica root',
    'Orange',
    'Cranberries',
    'Apple cider',
    'Cranberry juice',
    'Egg yolk',
    'Egg',
    'Grape juice',
    'Peach nectar',
    'Lemon',
    'Lemonade',
    'Cider',
    'Sprite',
    '7-Up'
  ];
  var liquorList = [
    'Light rum',
    'Applejack',
    'Gin',
    'Dark rum',
    'Strawberry schnapps',
    'Scotch',
    'Apricot brandy',
    'Triple sec',
    'Southern Comfort',
    'Brandy',
    'Lemon vodka',
    'Blended whiskey',
    'Amaretto',
    'Champagne',
    'Coffee liqueur',
    'Bourbon',
    'Tequila',
    'Vodka',
    'Añejo rum',
    'Kahlua',
    'Dubonnet Rouge',
    'Irish whiskey',
    'Apple brandy',
    'Cherry brandy',
    'Creme de Cacao',
    'Port',
    'Coffee brandy',
    'Red wine',
    'Rum',
    'Ricard',
    'Sherry',
    'Cognac',
    'Sloe gin',
    'Galliano',
    'Peach Vodka',
    'Ouzo',
    'Spiced rum',
    'Johnnie Walker',
    'Everclear',
    'Firewater',
    'Lager',
    'Whiskey',
    'Absolut Citron',
    'Pisco',
    'Irish cream',
    'Ale',
    'Chocolate liqueur',
    'Midori melon liqueur',
    'Sambuca',
    'Blackberry brandy',
    'Peppermint schnapps',
    'Creme de Cassis',
    'Jack Daniels'
  ];

  function displayLiquor() {
    for (i = 0; i < liquorList.length; i++) {
      var liquorItem = liquorList[i];
      $('#liquor').append(`<input type="checkbox">${liquorItem}<br>`);
    }
  }

  function displayIngredients() {
    for (i = 0; i < ingredientList.length; i++) {
      var ingredientItem = ingredientList[i];
      $('#ingredients').append(`<input type="checkbox">${ingredientItem}<br>`);
    }
  }

  function searchDrink(ingredient) {
    var ingredientUrl =
      'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=' +
      ingredient;

    $.ajax({
      url: ingredientUrl,
      method: 'GET'
    }).then(function(response) {
      console.log(response);
      var drinks = response.drinks;
      for (var i = 0; i < drinks.length; i++) {
        var drinkTitle = drinks[i].strDrink;
        // Creates an element to have the drink title displayed
        var drinkTitleDiv = $('<button>')
          .html(`${drinkTitle}`)
          .val(drinkTitle);
        // Displays the drink title
        $('#drinkList').append(drinkTitleDiv);
        $(drinkTitleDiv).on('click', function() {
          console.log($(this).val());
          var cocktailName = $(this).val();
          var recipeUrl =
            'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' +
            cocktailName;
          $.ajax({
            url: recipeUrl,
            method: 'GET'
          }).then(function(response) {
            console.log(response);
            for (var i = 1; i < 15; i++) {
              var drinkIng = `strIngredient${i}`;
              alert(response.drinks[0][drinkIng]);
            }
          });
        });

        // LOOK AT THIS!!!
        var drinkImg = $('<img>').attr('src', drinks[i].strDrinkThumb);
        $('strDrink').append(drinkImg);
      }
    });
  }

  $('#searchBtn').on('click', function() {
    var ingredient = $('#userIngredient').val();

    searchDrink(ingredient);
  });
  displayLiquor();
  displayIngredients();
});
