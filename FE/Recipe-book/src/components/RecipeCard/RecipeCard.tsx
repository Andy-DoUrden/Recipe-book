import React from 'react';
import type { Recipe } from '../../api/recipes';
import { Card, Image, Title } from './RecipeCard.styled';

interface Props {
  recipe: Recipe;
  onClick: () => void;
}

const RecipeCard: React.FC<Props> = ({ recipe, onClick }) => (
  <Card onClick={onClick}>
    <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
    <Title>{recipe.strMeal}</Title>
  </Card>
);

export default RecipeCard;
