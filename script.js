$(document).ready(function() {
  var ingredientList = [
    "7-up",
    "Agave Syrup",
    "Allspice",
    "Allspice Dram",
    "Almond Extract",
    "Almond Flavoring",
    "Almond",
    "Angelica Root",
    "Angostura Bitters",
    "Anise",
    "Apple Cider",
    "Apple Juice",
    "Apple",
    "Apricot Nectar",
    "Apricot",
    "Asafoetida",
    "Banana Syrup",
    "Banana",
    "Basil",
    "Beef Stock",
    "Berries",
    "Bitter Lemon",
    "Bitters",
    "Black Pepper",
    "Blackberries",
    "Blackcurrant Squash",
    "Blueberries",
    "Bourbon",
    "Brandy",
    "Brown Sugar",
    "Butter",
    "Candy",
    "Cantaloupe",
    "Caramel Coloring",
    "Caramel Sauce",
    "Carbonated Soft Drink",
    "Carbonated Water",
    "Cardamom",
    "Cayenne Pepper",
    "Celery Salt",
    "Celery",
    "Cherries",
    "Cherry Cola",
    "Cherry Grenadine",
    "Cherry Juice",
    "Cherry",
    "Chocolate Ice-cream",
    "Chocolate Liqueur",
    "Chocolate Milk",
    "Chocolate Sauce",
    "Chocolate Syrup",
    "Chocolate",
    "Cinnamon",
    "Clamato Juice",
    "Cloves",
    "Club Soda",
    "Coca-Cola",
    "Cocktail Onion",
    "Cocoa Powder",
    "Coconut Cream",
    "Coconut Milk",
    "Coconut Syrup",
    "Coffee",
    "Cola",
    "Cold Water",
    "Condensed Milk",
    "Coriander",
    "Corn Syrup",
    "Cornstarch",
    "Cranberries",
    "Cranberry Juice",
    "Cream of Coconut",
    "Cream Soda",
    "Cream",
    "Creme Fraiche",
    "Crystal Light",
    "Cucumber",
    "Cumin Powder",
    "Cumin Seed",
    "Daiquiri Mix",
    "Dark Chocolate",
    "Dark Soy Sauce",
    "Demerara Sugar",
    "Dr. Pepper",
    "Dried Oregano",
    "Egg White",
    "Egg Yolk",
    "Egg",
    "Eggnog",
    "Espresso",
    "Fanta",
    "Fennel Seeds",
    "Flaked Almonds",
    "Food Coloring",
    "Fresca",
    "Fresh Basil",
    "Fresh Lemon Juice",
    "Fresh Lime Juice",
    "Fresh Mint",
    "Fruit Juice",
    "Fruit Punch",
    "Fruit",
    "Garlic Sauce",
    "Gatorade",
    "Ginger Ale",
    "Ginger Beer",
    "Ginger",
    "Ginger Syrup",
    "Glycerine",
    "Granulated Sugar",
    "Grape juice",
    "Grape soda",
    "Grapefruit Juice",
    "Grapes",
    "Green Olives",
    "Grenadine",
    "Ground Ginger",
    "Guava juice",
    "Habanero Peppers",
    "Half-and-half",
    "Hawaiian punch",
    "Heavy Cream",
    "Hot Sauce",
    "Hot Chocolate",
    "Honey syrup",
    "Ice Cream",
    "Ice",
    "Iced tea",
    "Jello",
    "Jelly",
    "Kiwi",
    "Kool-Aid",
    "Lemon juice",
    "Lemon Peel",
    "Lemon soda",
    "Lemon-lime soda",
    "Lemon-lime",
    "Lemon",
    "Lemonade",
    "Licorice Root",
    "Light Cream",
    "Lime",
    "Lime Juice",
    "Lime Peel",
    "Limeade",
    "Mandarin",
    "Mango",
    "Maple Syrup",
    "Maraschino cherry juice",
    "Maraschino Cherry",
    "Margarita Mix",
    "Marshmallows",
    "Milk",
    "Mini-snickers bars",
    "Mint syrup",
    "Mint",
    "Mountain Dew",
    "Nutmeg",
    "Olive Oil",
    "Olive",
    "Onion",
    "Orange Bitters",
    "Orange Juice",
    "Orange Peel",
    "Orange Soda",
    "Orange spiral",
    "Orange",
    "Oreo cookie",
    "Orgeat Syrup",
    "Oyster Sauce",
    "Papaya juice",
    "Papaya",
    "Passion fruit juice",
    "Passion fruit syrup",
    "Peach Bitters",
    "Peach Nectar",
    "Peach juice",
    "Peach",
    "Peanut Oil",
    "Pepper",
    "Peppermint extract",
    "Pepsi Cola",
    "Peychaud bitters",
    "Pina colada mix",
    "Pineapple Juice",
    "Pineapple-orange-banana juice",
    "Pineapple",
    "Pink lemonade",
    "Plain Chocolate",
    "Plain Flour",
    "Plums",
    "Powdered Sugar",
    "Raisins",
    "Raspberry Jam",
    "Raspberry Juice",
    "Raspberry syrup",
    "Red Chile Flakes",
    "Red Hot Chili Flakes",
    "Red Wine",
    "Rhubarb",
    "Rock Salt",
    "Root beer",
    "Rosemary",
    "Roses sweetened lime juice",
    "Rosewater",
    "Salt",
    "Salted Chocolate",
    "Sarsaparilla",
    "Schweppes Lemon",
    "Schweppes Russchian",
    "Sherbet",
    "Soda Water",
    "Sour Apple Pucker",
    "Sour Mix",
    "Soy Milk",
    "Soy Sauce",
    "Soya Milk",
    "Soya Sauce",
    "Sprite",
    "Squeezed Orange",
    "Squirt",
    "Strawberries",
    "Strawberry juice",
    "Strawberry syrup",
    "Sugar Syrup",
    "Sugar",
    "Sunny delight",
    "Surge",
    "Sweet and Sour",
    "Sweet Cream",
    "Tabasco Sauce",
    "Tang",
    "Tea",
    "Tomato Juice",
    "Tomato",
    "Tonic Water",
    "Tropicana",
    "Vanilla extract",
    "Vanilla Ice-Cream",
    "Vanilla syrup",
    "Vanilla",
    "Vinegar",
    "Water",
    "Whipped Cream",
    "Whipping Cream",
    "Whisky",
    "White grape juice",
    "White Vinegar",
    "Worcestershire Sauce",
    "Wormwood",
    "Yeast",
    "Yoghurt"
  ];
  var liquorList = [
    "151 proof rum",
    "Absinthe",
    "Absolut citron",
    "Absolut Kurant",
    "Absolut Peppar",
    "Absolut Vodka",
    "Advocaat",
    "Aejo Rum",
    "Aftershock",
    "Ale",
    "Amaretto",
    "Aperol",
    "Apfelkorn",
    "Apple Brandy",
    "Applejack",
    "Apple Schnapps",
    "Apricot Brandy",
    "Anis",
    "Anisette",
    "Aquavit",
    "Arrack",
    "Anejo Rum",
    "Averna",
    "Bacardi Limon",
    "Bacardi",
    "Bailey's Irish Cream",
    "Banana Liquor",
    "Banana Rum",
    "Barenjager",
    "Beer",
    "Benedictine",
    "Black Rum",
    "Black Sambuca",
    "Blackberry Brandy",
    "Blackberry Schnapps",
    "Blackberry Cordial",
    "Blackcurrant Schnapps",
    "Blackstrap rum",
    "Blended Scotch",
    "Blended Whiskey",
    "Blue Curacao",
    "Blue Maui",
    "Blueberry Schnapps",
    "Butterscotch Schnapps",
    "Cachaca",
    "Calvados",
    "Campari",
    "Canadian Whisky",
    "Chambord Raspberry Liqueur",
    "Champagne",
    "Cherry Brandy",
    "Cherry Heering",
    "Cherry Liqueur",
    "Cider",
    "Cinnamon Schnapps",
    "Citrus Vodka",
    "Cocchi Americano",
    "Coconut Liqueur",
    "Coconut Rum",
    "Coffee Brandy",
    "Coffee Liqueur",
    "Cognac",
    "Cointreau",
    "Corona",
    "Cranberry Liqueur",
    "Cranberry Vodka",
    "Cream Sherry",
    "Creme De Almond",
    "Creme De Banane",
    "Creme De Cacao",
    "Creme De Cassis",
    "Creme De Noyaux",
    "Creme de Violette",
    "Crown Royal",
    "Curacao",
    "Cynar",
    "Dark Creme De Cacao",
    "Dark Rum",
    "Drambuie",
    "Dry Curacao",
    "Dry Vermouth",
    "Dubonnet Blanc",
    "Dubonnet Rouge",
    "Elderflower cordial",
    "Eren Cream",
    "Everclear",
    "Falernum",
    "Fernet-Branca",
    "Firewater",
    "Forbidden Fruit",
    "Frangelico",
    "Galliano",
    "Gin",
    "Godiva Liqueur",
    "Gold rum",
    "Gold Tequila",
    "Goldschlager",
    "Grain Alcohol",
    "Grand Marnier",
    "Green Chartreuse",
    "Green Creme de Menthe",
    "Green Ginger Wine",
    "Guinness stout",
    "Guinness",
    "Hazelnut liqueur",
    "Hpnotiq",
    "Hot Damn",
    "Hooch",
    "Honey",
    "Ilegal Joven mezcal",
    "Islay single malt Scotch",
    "Irish cream",
    "Irish Whiskey",
    "Jack Daniels",
    "Jagermeister",
    "Jim Beam",
    "Johnnie Walker",
    "Kahlua",
    "Key Largo Schnapps",
    "Kirschwasser",
    "Kiwi liquer",
    "Kummel",
    "Lager",
    "Lemon Vodka",
    "Light Rum",
    "Lillet",
    "Lillet Blanc",
    "Lime Liqueur",
    "Lime Juice Cordial",
    "Lime Vodka",
    "Madeira",
    "Mandarine napoleon",
    "Malibu Rum",
    "Maraschino Liqueur",
    "Majoram leaves",
    "Martini Bianco",
    "Martini Extra Dry",
    "Martini Rosso",
    "Maui",
    "Melon Liqueur",
    "Melon Vodka",
    "Mezcal",
    "Midori Melon Liqueur",
    "Midori",
    "Nocino",
    "Orange Curacao",
    "Orange liqueur",
    "Orange rum",
    "Orange vodka",
    "Ouzo",
    "Parfait amour",
    "Passoa",
    "Peach brandy",
    "Peach liqueur",
    "Peach Schnapps",
    "Peach Vodka",
    "Peachtree schnapps",
    "Peppermint Schnapps",
    "Pernod",
    "Pineapple rum",
    "Pineapple vodka",
    "Pisang Ambon",
    "Pisco",
    "Port",
    "Prosecco",
    "Purple passion",
    "Ramazzotti",
    "Raspberry cordial",
    "Raspberry Liqueur",
    "Raspberry schnapps",
    "Raspberry Vodka",
    "Ricard",
    "Root beer schnapps",
    "Rosso Vermouth",
    "Rum",
    "Rumple Minze",
    "Rye Whiskey",
    "Sake",
    "Sambuca",
    "Schnapps",
    "Southern Comfort",
    "Spiced Rum",
    "Strawberry liqueur",
    "Strawberry Schnapps",
    "Swedish punsch",
    "Sweet Vermouth",
    "Tawny port",
    "Tennessee whiskey",
    "Tequila",
    "Tequila rose",
    "Tia Maria",
    "Triple Sec",
    "Tuaca",
    "Vanilla liqueur",
    "Vanilla schnapps",
    "Vanilla vodka",
    "Vermouth",
    "Vodka",
    "Watermelon schnapps",
    "Whiskey",
    "White chocolate liqueur",
    "White Creme de Menthe",
    "White port",
    "White Rum",
    "White Vermouth",
    "White Wine",
    "Wild Turkey",
    "Wildberry schnapps",
    "Wine",
    "Yellow Chartreuse",
    "Yukon Jack",
    "Zima"
  ];

  function displayLiquor() {
    for (i = 0; i < liquorList.length; i++) {
      var liquorItem = liquorList[i];
      $("#liquor").append(
        `<li><input type="checkbox"><a>${liquorItem}</a></li>`
      );
    }
  }

  function displayIngredients() {
    for (i = 0; i < ingredientList.length; i++) {
      var ingredientItem = ingredientList[i];
      $("#ingredients").append(
        `<li><input type="checkbox"><a>${ingredientItem}</a></li>`
      );
    }
  }

  // Run the filter functions as you type ingredients in the search bar
  $("#userIngredient").keyup(function(e) {
    if (e.keyCode === 13) {
      var ingredient = $("#userIngredient").val();
      searchDrink(ingredient);
      $("#userIngredient").val("");
    } else {
      myLiquorFunction();
      myIngredientFunction();
    }
  });

  // Filter the liquor list based on your input in the search bar
  function myLiquorFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("userIngredient");
    filter = input.value.toUpperCase();
    ul = document.getElementById("liquor");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  // Filter the ingredient list as you input text in the search bar
  function myIngredientFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("userIngredient");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ingredients");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
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
      console.log(response);
      var drinks = response.drinks;
      for (var i = 0; i < drinks.length; i++) {
        var drinkTitle = drinks[i].strDrink;
        // Creates an element to have the drink title displayed
        var drinkTitleDiv = $("<button>").addClass('displayBtn')
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
            var ingrArray = [];
            for (i = 1; i < 16; i++) {
              var measIngr = {
                ingredient: response.drinks[0][`strIngredient${i}`],
                measurement: response.drinks[0][`strMeasure${i}`]
              };
              ingrArray.push(measIngr);
            }

            // Creates an element to have the drink image displayed
            var drinkImageDiv = $("<img>").addClass('drinkImgClass')
              .attr("src", response.drinks[0].strDrinkThumb)
              .width(300);
            var drinkIngredientDiv = $("<ul>").addClass('drinkIngClass');
            ingrArray.forEach(ingredient => {
              if (ingredient.ingredient !== null) {
                var ingredientDiv = $("<li>");
                var measurement =
                  ingredient.measurement === null
                    ? ""
                    : ingredient.measurement + " of ";

                ingredientDiv.html(`${measurement}${ingredient.ingredient}`);
                drinkIngredientDiv.append(ingredientDiv);
              }
            });
            var drinkInstructionsDiv = $("<div>").addClass('drinkInstClass').html(
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
    $("#userIngredient").val("");
  });
  displayLiquor();
  displayIngredients();

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
