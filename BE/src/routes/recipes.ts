import express from "express";
import { Request, Response } from "express";
import { getRecipes, getRecipeById } from "../services/recipeService";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const { ingredient, country, category } = req.query;
    const data = await getRecipes(ingredient?.toString(), country?.toString(), category?.toString());

    if (!data.meals) {
      return res.status(404).json({ error: "No recipes found" });
    }

    res.json(data);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message || "Error fetching recipes" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const recipe = await getRecipeById(req.params.id);

    if (!recipe.meals) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(recipe);
  } catch (err) {
    const error = err as Error;
    res.status(500).json({ error: error.message || "Error fetching recipe info" });
  }
});

export default router;
