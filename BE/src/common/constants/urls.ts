import dotenv from "dotenv";

dotenv.config();

export const urls = {
  byIngredient: `${process.env.API_BASE}/filter.php?i=`,
  byCountry: `${process.env.API_BASE}/filter.php?a=`,
  byCategory: `${process.env.API_BASE}/filter.php?c=`,
  byId: `${process.env.API_BASE}/lookup.php?i=`,
};
