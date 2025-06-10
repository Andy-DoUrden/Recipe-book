import express from "express";
import { getRecipes, getRecipeById } from "../services/recipeService";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { ingredient, country, category } = req.query;
    const data = await getRecipes(ingredient as string, country as string, category as string);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching recipes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await getRecipeById(req.params.id);
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: "Error fetching recipe info" });
  }
});

export default router;
