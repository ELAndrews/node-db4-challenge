const db = require("../dbConfig");

function get() {
  return db("recipe");
}
function getById(id) {
  return db("recipe")
    .where({ id })
    .first();
}

function getShoppingList(id) {
  return db("recipe_ingredients")
    .join("ingredients", "recipe_ingredients.ingredientsID", "ingredients.id")
    .select(
      "recipe_ingredients.id",
      "ingredients.ingredient",
      "recipe_ingredients.quantity",
      "recipe_ingredients.measurement"
    )
    .where({ recipeID: id });
}

function getInstructions(id) {
  return db("steps")
    .join("recipe", "steps.recipeID", "recipe.id")
    .select(
      "recipe.id",
      "recipe.recipe_name",
      "steps.Order_Number",
      "steps.Step_details"
    )
    .where({ recipeID: id })
    .orderBy("steps.Order_Number");
}

module.exports = {
  get,
  getById,
  getShoppingList,
  getInstructions
};
