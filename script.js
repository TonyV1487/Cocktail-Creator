$(document).ready(function() {
  //var item = localStorage.getItem("vrum");
  //console.log(item);

  //create local storage variable
  var saveCocktailBtn = document.getElementById("saveCocktailBtn");
  saveCocktailBtn.addEventListener("click", saveCocktailToStorage);

  //create local storage function
  function saveCocktailToStorage() {
    var cocktailName = document.getElementById("cocktailName").value;
    localStorage.setItem(cocktailName, JSON.stringify(drinks));
    console.log("Saving cocktail " + cocktailName);
    console.log(JSON.stringify(drinks));
  }
  //needed to create array to tie "what do you havve" to "drinks you can make"
  var ingredientArray = [];
  //list of incredients array
  var ingredientList = [
    "Sweet Vermouth",
    "Orange bitters",
    "Dry Vermouth",
    "Tea",
    "Bitters",
    "Sugar",
    "demerara Sugar",
    "Dubonnet Rouge",
    "Lime juice",
    "Carbonated water",
    "Grenadine",
    "Grapefruit juice",
    "Apple juice",
    "Pineapple juice",
    "Lemon juice",
    "Sugar syrup",
    "Milk",
    "Strawberries",
    "Chocolate syrup",
    "Yogurt",
    "Mango",
    "Ginger",
    "Lime",
    "Cantaloupe",
    "Berries",
    "Grapes",
    "Kiwi",
    "Tomato juice",
    "Cocoa powder",
    "Chocolate",
    "Heavy cream",
    "Galliano",
    "Coffee",
    "Water",
    "Espresso",
    "Angelica root",
    "Orange",
    "Cranberries",
    "Apple cider",
    "Cranberry juice",
    "Egg yolk",
    "Egg",
    "Grape juice",
    "Peach nectar",
    "Lemon",
    "Lemonade",
    "Cider",
    "Sprite",
    "7-Up"
  ];
  //list of liquors array
  var liquorList = [
    "Light rum",
    "Applejack",
    "Gin",
    "Dark rum",
    "Strawberry schnapps",
    "Scotch",
    "Apricot brandy",
    "Triple sec",
    "Southern Comfort",
    "Brandy",
    "Lemon vodka",
    "Blended whiskey",
    "Amaretto",
    "Champagne",
    "Coffee liqueur",
    "Bourbon",
    "Tequila",
    "Vodka",
    "Añejo rum",
    "Kahlua",
    "Dubonnet Rouge",
    "Irish whiskey",
    "Apple brandy",
    "Cherry brandy",
    "Creme de Cacao",
    "Port",
    "Coffee brandy",
    "Red wine",
    "Rum",
    "Ricard",
    "Sherry",
    "Cognac",
    "Sloe gin",
    "Galliano",
    "Peach Vodka",
    "Ouzo",
    "Spiced rum",
    "Johnnie Walker",
    "Everclear",
    "Firewater",
    "Lager",
    "Whiskey",
    "Absolut Citron",
    "Pisco",
    "Irish cream",
    "Ale",
    "Chocolate liqueur",
    "Midori melon liqueur",
    "Sambuca",
    "Blackberry brandy",
    "Peppermint schnapps",
    "Creme de Cassis",
    "Jack Daniels"
  ];

  //variable to have "drink up" moved to userChoice div
  var drinks = "";

  function displayLiquor() {
    for (i = 0; i < liquorList.length; i++) {
      var liquorItem = liquorList[i];
      $("#liquor").append(`<input type="checkbox">${liquorItem}<br>`);
    }
  }

  function displayIngredients() {
    for (i = 0; i < ingredientList.length; i++) {
      var ingredientItem = ingredientList[i];
      $("#ingredients").append(`<input type="checkbox">${ingredientItem}<br>`);
    }
  }

  function searchDrink(ingredient) {
    var ingredientUrl =
      "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" +
      ingredient;

    $.ajax({
      url: ingredientUrl,
      method: "GET"
    }).then(function(response) {
      //console.log(response);
      document.getElementById("drinkList").innerHTML = "";
      //had to move var drinks to a global variable
      drinks = response.drinks;
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
              //alert(response.drinks[0][drinkIng]);
            }
          });
        });

        // LOOK AT THIS!!!
        var drinkImg = $("<img>").attr("src", drinks[i].strDrinkThumb);
        $("strDrink").append(drinkImg);
      }
    });
  }

  //pushes user choice to new div I created to display in "What do you have"
  $("#searchBtn").on("click", function() {
    var ingredient = $("#userIngredient").val();
    if (ingredient != "") {
      ingredientArray.push(ingredient);

      var userChoice = document.getElementById("userChoice");
      var userChoiceHtml = document.createElement("DIV");
      //google fu said to use .id to solve error I was having
      userChoiceHtml.id = ingredient + "_choice";
      userChoice.appendChild(userChoiceHtml);

      //needed to create label variable to have choice appear in div
      var choiceLabel = document.createElement("LABEL");
      choiceLabel.innerText = ingredient;
      userChoiceHtml.appendChild(choiceLabel);

      /*
      var userChoiceHtml = '<div id="' + ingredient + '_choice">';
      userChoiceHtml += "<label>" + ingredient + "</label>";
      
      userChoiceHtml +=
        '<button id="' +
        ingredient +
        '_del" value="' +
        ingredient +
        '" onclick="deleteChoice(this.value)">del</button>';
      userChoiceHtml += "</div>";
      */

      //userChoice.innerHTML += userChoiceHtml;

      //variable to create delete button
      var btn = document.createElement("BUTTON");
      //had to change from innerHTML to innerText to get more than one delete button to work
      btn.innerText = "Del";
      btn.value = ingredient;
      btn.id = ingredient + "_del";
      //addEventListener is only deleting buttons that are last added.
      btn.addEventListener("click", deleteChoice);
      userChoiceHtml.appendChild(btn);

      //searchDrink(ingredient);
    }
    //created array to reduce drink choices when more liquors and ingredients are selected
    var ingredients = "";

    //for loop to reduce drink choices provided by array as more ingredients are entered
    for (i = 0; i < ingredientArray.length; i++) {
      ingredients += ingredientArray[i];
      if (i < ingredientArray.length - 1) {
        ingredients += ",";
      }
    }
    console.log(ingredients);

    searchDrink(ingredients);
  });
  displayLiquor();
  displayIngredients();

  //created function to have the ability to delete selected ingredients
  function deleteChoice(event) {
    //console.log(event.target.value);
    //var delBtnId = event.target.id; NOTE: this is not working.
    //stack overflow said to create event.target.value to identify object that led to event.
    var delBtnValue = event.target.value;
    document.getElementById(delBtnValue + "_choice").remove();
    event.target.remove();

    //NOTE: tutor recommended that I use indexOf and splice the index to get my for loop to work
    var index = ingredientArray.indexOf(delBtnValue);
    if (index > -1) {
      ingredientArray.splice(index, 1);
    }

    var ingredients = "";

    for (i = 0; i < ingredientArray.length; i++) {
      ingredients += ingredientArray[i];
      if (i < ingredientArray.length - 1) {
        ingredients += ",";
      }
    }
    searchDrink(ingredients);
  }

  // Caret
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
});
