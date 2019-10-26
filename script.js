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
            var ingredientArray = [
              response.drinks[0].strIngredient1,
              response.drinks[0].strIngredient2,
              response.drinks[0].strIngredient3,
              response.drinks[0].strIngredient4,
              response.drinks[0].strIngredient5,
              response.drinks[0].strIngredient6,
              response.drinks[0].strIngredient7,
              response.drinks[0].strIngredient8,
              response.drinks[0].strIngredient9,
              response.drinks[0].strIngredient10,
              response.drinks[0].strIngredient11,
              response.drinks[0].strIngredient12,
              response.drinks[0].strIngredient13,
              response.drinks[0].strIngredient14,
              response.drinks[0].strIngredient15
            ];
            // Creates an element to have the drink image displayed
            var drinkImageDiv = $("<img>")
              .attr("src", response.drinks[0].strDrinkThumb)
              .width(300);
            var drinkIngredientDiv = $("<ul>");
            ingredientArray.forEach(ingredient => {
              if (ingredient !== null) {
                var ingredientDiv = $("<li>");
                ingredientDiv.html(ingredient);
                drinkIngredientDiv.append(ingredientDiv);
              }
            });
            var drinkInstructionsDiv = $("<div>").html(
              response.drinks[0].strInstructions
            );

            // Displays the drink image
            $("#drinkDisplay")
              .append(drinkImageDiv)
              .append(drinkIngredientDiv)
              .append(drinkInstructionsDiv);
          });
        });
      }
    });
  }

  $("#searchBtn").on("click", function() {
    var ingredient = $("#userIngredient").val();

    searchDrink(ingredient);
  });
});
