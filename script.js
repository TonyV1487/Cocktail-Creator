$(document).ready(function() {
  function searchDrink(ingredient) {
    var ingredientUrl =
      "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" +
      ingredient;

    $.ajax({
      url: ingredientUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var drinks = response.drinks;
      for (var i = 0; i < drinks.length; i++) {
        var drinkTitle = drinks[i].strDrink;
        // Creates an element to have the drink title displayed
        var drinkTitleDiv = $("<button>")
          .html(`${drinkTitle}`)
          .val(drinkTitle);
        // Displays the drink title
        $("#drinkList").append(drinkTitleDiv);
        $(drinkTitleDiv).on("click", function() {
          console.log($(this).val());
          var cocktailName = $(this).val();
          var recipeUrl =
            "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" +
            cocktailName;
          $.ajax({
            url: recipeUrl,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            for (var i = 1; i < 15; i++) {
              var drinkIng = `strIngredient${i}`;
              alert(response.drinks[0][drinkIng]);
            }
          });
        });

        // LOOK AT THIS!!!
        var drinkImg = $("<img>").attr("src", drinks[i].strDrinkThumb);
        $("strDrink").append(drinkImg);
      }
    });
  }

  $("#searchBtn").on("click", function() {
    var ingredient = $("#userIngredient").val();

    searchDrink(ingredient);
  });
});
