import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export const fetchRecipes = (params?: {
  ingredient?: string;
  country?: string;
  category?: string;
}) => {
  return axios.get(`${API_BASE}/recipes`, { params });
};

export const fetchRecipeById = (id: string) => {
  return axios.get(`${API_BASE}/recipes/${id}`);
};
