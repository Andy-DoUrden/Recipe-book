import dotenv from "dotenv";
import axios from "axios";
import { urls } from "../common/constants/urls";

export async function getRecipes(ingredient?: string, country?: string, category?: string) {
  let url = `${process.env.API_BASE}/search.php?s=`;

  if (ingredient) {
    url = `${urls.byIngredient + ingredient}`;
  } else if (country) {
    url = `${urls.byCountry + country}`;
  } else if (category) {
    url = `${urls.byCategory + category}`;
  }
  console.log(url);
  const res = await axios.get(url);
  return res.data;
}

export async function getRecipeById(id: string) {
  const res = await axios.get(`${urls.byId + id}`);
  return res.data;
}
