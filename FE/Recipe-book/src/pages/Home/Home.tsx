import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../../api/recipes';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { PageWrapper, Title, Grid } from './Home.styled';

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const ingredient = searchParams.get('ingredient') || undefined;
    const country = searchParams.get('country') || undefined;
    const category = searchParams.get('category') || undefined;

    fetchRecipes({ ingredient, country, category })
      .then((res) => {
        setRecipes(res.data.meals || []);
      })
      .catch((err) => console.error(err));
  }, [searchParams]);

  const title = searchParams.get('ingredient')
    ? `Recipes with Ingredient: ${searchParams.get('ingredient')}`
    : searchParams.get('country')
      ? `Recipes from ${searchParams.get('country')}`
      : searchParams.get('category')
        ? `Category: ${searchParams.get('category')}`
        : 'All Recipes';

  return (
    <PageWrapper>
      <Title>{title}</Title>
      <Grid>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
          />
        ))}
      </Grid>
    </PageWrapper>
  );
};

export default Home;
