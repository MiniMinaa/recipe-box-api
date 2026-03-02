import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});

//sample data
const recipes = [
  // adds array with 3 objects in it
  { id: 1, name: "Swedish pancakes", cuisine: "Swedish", prepTime: "15 mins" },
  { id: 2, name: "Dolma", cuisine: "Kurdish", prepTime: "60 mins" },
  { id: 3, name: "Greek Salad", cuisine: "Greek", prepTime: "15 mins" },
];

app.get("/recipes", (req, res) => {
  res.json(recipes);
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
