import dotenv from "dotenv";
import axios from "axios";
import { urls } from "../common/constants/urls";

dotenv.config();

const API_BASE = process.env.API_BASE || "https://www.themealdb.com/api/json/v1/1";

export async function getRecipes(ingredient?: string, country?: string, category?: string) {
  let url: string;

  if (ingredient) {
    url = `${API_BASE}/filter.php?i=${ingredient}`;
  } else if (country) {
    url = `${API_BASE}/filter.php?a=${country}`;
  } else if (category) {
    url = `${API_BASE}/filter.php?c=${category}`;
  } else {
    url = `${API_BASE}/search.php?s=`;
  }

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch recipes: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while fetching recipes");
  }
}

export async function getRecipeById(id: string) {
  try {
    const res = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch recipe details: ${error.message}`);
    }
    throw new Error("An unexpected error occurred while fetching recipe details");
  }
}
