import { FC } from "react";

import cl from "./RecipeCard.module.css";
import { useNavigate } from "react-router-dom";
import { Recipe, useSearchRecipesQuery } from "../../services/recipeService";
import { useAppSelector } from "../../hooks/hooks";

const RecipeCard: FC = () => {
  const navigate = useNavigate();

  const filter = useAppSelector((state) => state.search.filter);
  const { data, isLoading } = useSearchRecipesQuery(
    filter.trim() === "" ? " " : filter,
    {
      skip: false,
    }
  );

  const handleRecipeClick = (recipe: Recipe) => {
    console.log(recipe);
    navigate(`/recipes/${recipe.idMeal}`, { state: recipe });
  };

  if (isLoading) return <div className={cl.loading}>Загрузка...</div>;

  return (
    <>
      <div className={cl.wrapper_recipe}>
        {data?.meals.map((recipe) => (
          <div
            onClick={() => handleRecipeClick(recipe)}
            className={cl.recipe_inner}
            key={recipe.idMeal}
          >
            <img
              className={cl.image}
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <div className={cl.recipe_options}>
              <p>{recipe.strMeal}</p>
              <p>{recipe.strArea}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeCard;
