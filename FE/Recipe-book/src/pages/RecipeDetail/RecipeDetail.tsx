import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecipeById, fetchRecipes } from '../../api/recipes';
import Sidebar from '../../components/Sidebar/Sidebar';
import {
  Container,
  Main,
  Image,
  Title,
  Subtitle,
  Instructions,
  Ingredients,
  Ingredient,
} from './RecipeDetail.styled';

const RecipeDetail: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);
  const [categoryRecipes, setCategoryRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    fetchRecipeById(id).then((res) => {
      const data = res.data.meals?.[0];
      setRecipe(data);

      if (data?.strCategory) {
        fetchRecipes({ category: data.strCategory }).then((catRes) => {
          setCategoryRecipes(catRes.data.meals || []);
        });
      }
    });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing) ingredients.push(`${ing} - ${measure}`);
  }

  return (
    <Container>
      <Main>
        <Image src={recipe.strMealThumb} alt={recipe.strMeal} />
        <Title>{recipe.strMeal}</Title>
        <Subtitle onClick={() => navigate(`/?country=${recipe.strArea}`)}>
          {recipe.strArea}
        </Subtitle>

        <Instructions>
          <h3>Instructions</h3>
          <p>{recipe.strInstructions}</p>
        </Instructions>

        <Ingredients>
          <h3>Ingredients</h3>
          {ingredients.map((item, index) => {
            const ingName = item.split(' - ')[0];
            return (
              <Ingredient key={index} onClick={() => navigate(`/?ingredient=${ingName}`)}>
                {item}
              </Ingredient>
            );
          })}
        </Ingredients>
      </Main>

      <Sidebar
        items={categoryRecipes.filter((r) => r.idMeal !== recipe.idMeal)}
        onItemClick={(id) => navigate(`/recipe/${id}`)}
      />
    </Container>
  );
};

export default RecipeDetail;
