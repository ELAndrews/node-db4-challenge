exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "chorizo" },
        { ingredient: "chopped tomatoes" },
        { ingredient: "butter beans" },
        { ingredient: "pesto" },
        { ingredient: "roasted red pepper" },
        { ingredient: "olive oil" },
        { ingredient: "walnuts" },
        { ingredient: "garlic clove" },
        { ingredient: "spaghetti" },
        { ingredient: "parmesan" },
        { ingredient: "cauliflower" },
        { ingredient: "fennel seeds" },
        { ingredient: "red lentils" },
        { ingredient: "curry paste" },
        { ingredient: "lemon juice" }
      ]);
    });
};
