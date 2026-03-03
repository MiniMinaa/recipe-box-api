import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});

//sample data
let recipes = [
  // adds array with 3 objects in it
  { id: 1, name: "Swedish pancakes", cuisine: "Swedish", prepTime: "15 mins" },
  { id: 2, name: "Dolma", cuisine: "Kurdish", prepTime: "60 mins" },
  { id: 3, name: "Greek Salad", cuisine: "Greek", prepTime: "15 mins" },
];

app.get("/recipes", (req, res) => {
  res.json(recipes);
});
app.get("/recipes", (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === recipeId);
  if (!recipe) {
    return res.status(404).json({ message: "Recipe not found!" });
  }
  res.json(recipe);
});

app.post("/recipes", (req, res) => {
  const newRecipe = {
    id: recipes.length + 1,
    name: req.body.name,
    cuisine: req.body.cuisine,
    prepTime: req.body.prepTime,
  };
  recipes.push(newRecipe);
  res.json({ message: "Recipe added successfully!", recipe: newRecipe });
});

app.put("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === recipeId);
  if (!recipe) {
    return res.status(404).json({ message: "recipe not found!" });
  }
  recipe.name = req.body.name || recipe.name;
  recipe.cuisine = req.body.cuisine || recipe.cuisine;
  res.json({ message: "Recipe updated successfully!", recipe });
});

app.delete("/recipes/:id", (req, res) => {
  const recipeId = parseInt(req.params.id);
  recipes = recipes.filter((r) => r.id !== recipeId);
  res.json({ message: "Recipe deleted successfully!" });
});
