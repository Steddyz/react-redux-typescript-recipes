import { FC } from "react";

import cl from "./RandomRecipe.module.css";
import { useNavigate } from "react-router-dom";
import { Recipe, useGetRandomRecipeQuery } from "../../services/recipeService";
import { setSelectedRecipe } from "../../features/recipeSlice";
import { useAppDispatch } from "../../hooks/hooks";

const RandomRecipe: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data } = useGetRandomRecipeQuery();
  const handleRecipeClick = (recipe: Recipe) => {
    dispatch(setSelectedRecipe(recipe));
    navigate(`/recipes/${recipe.idMeal}`, { state: recipe });
  };

  const meal = data?.meals[0];

  return (
    <div className={cl.random}>
      <div className={cl.random_wrapper}>
        <div className={cl.wrapper_title}>Случайный рецепт</div>
        {meal ? (
          <div
            className={cl.random_inner}
            onClick={() => handleRecipeClick(meal)}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className={cl.random_dish}
            />
            <div className={cl.wapper_inner}>
              <p className={cl.random_title}>{meal.strMeal}</p>
              <p className={cl.random_country}>{meal.strArea}</p>
            </div>
          </div>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};

export default RandomRecipe;
