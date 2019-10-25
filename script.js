$(document).ready(function() {
  function searchIngredient(ingredient) {
    var queryUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var drinks = response.drinks;
      for (var i = 0; i < drinks.length; i++) {
        var drinkTitle = drinks[i].strDrink;
        // Creates an element to have the rating displayed
        var drinkTitleDiv = $("<div>").html(`${drinkTitle}`);
        // Displays the rating
        $("#drinkList").append(drinkTitleDiv);

        // LOOK AT THIS!!!
        var drinkImg = $("<img>").attr("src", drinks[i].strDrinkThumb);
        $("strDrink").append(drinkImg);
      }
    });
  }
  $("#searchBtn").on("click", function() {
    var ingredient = $("#userIngredient").val();
    searchIngredient(ingredient);
  });
});
