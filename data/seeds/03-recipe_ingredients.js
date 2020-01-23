exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          recipeID: "1",
          ingredientsID: "1",
          quantity: "200",
          measurement: "grams"
        },
        {
          recipeID: "1",
          ingredientsID: "2",
          quantity: "800",
          measurement: "gram can"
        },
        {
          recipeID: "1",
          ingredientsID: "3",
          quantity: "800",
          measurement: "gram can"
        },
        {
          recipeID: "1",
          ingredientsID: "4",
          quantity: "1",
          measurement: "tub"
        },
        {
          recipeID: "2",
          ingredientsID: "5",
          quantity: "1",
          measurement: "item"
        },
        {
          recipeID: "2",
          ingredientsID: "6",
          quantity: "30",
          measurement: "ml"
        },
        {
          recipeID: "2",
          ingredientsID: "7",
          quantity: "50",
          measurement: "grams"
        },
        {
          recipeID: "2",
          ingredientsID: "8",
          quantity: "1",
          measurement: "small clove"
        },
        {
          recipeID: "2",
          ingredientsID: "9",
          quantity: "100",
          measurement: "grams"
        },
        {
          recipeID: "3",
          ingredientsID: "11",
          quantity: "1",
          measurement: "item"
        },
        {
          recipeID: "3",
          ingredientsID: "12",
          quantity: "2",
          measurement: "tsp"
        },
        {
          recipeID: "3",
          ingredientsID: "13",
          quantity: "150",
          measurement: "grams"
        },
        {
          recipeID: "3",
          ingredientsID: "14",
          quantity: "3",
          measurement: "tbsp"
        },
        {
          recipeID: "3",
          ingredientsID: "6",
          quantity: "1.5",
          measurement: "tbsp"
        }
      ]);
    });
};
