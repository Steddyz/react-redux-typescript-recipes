import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import {
  Recipe,
  useGetMealByCategoryQuery,
  useSearchRecipesQuery,
} from "../../services/recipeService";

import cl from "./MealsByCategory.module.css";
import { useAppSelector } from "../../hooks/hooks";

interface Params {
  [key: string]: string | undefined;
  categoryName: string;
}

const MealsByCategory: FC = () => {
  const { categoryName } = useParams<Params>();
  const navigate = useNavigate();

  const filter = useAppSelector((state) => state.search.filter);

  const { data, isLoading } = useSearchRecipesQuery(
    filter.trim() === "" ? categoryName || "" : filter
  );

  const handleRecipeClick = (recipe: Recipe) => {
    console.log(recipe);
    navigate(`/recipes/${recipe.idMeal}`, { state: recipe });
  };
  if (isLoading) return <div className={cl.loading}>Загрузка...</div>;

  return (
    <>
      <h2 className={cl.title}>Блюда категории {categoryName}</h2>
      <SearchForm />

      <div className={cl.wrapper_meal}>
        {data?.meals &&
          data.meals.map((meal) => (
            <div
              key={meal.idMeal}
              onClick={() => handleRecipeClick(meal)}
              className={cl.meal_inner}
            >
              <img
                className={cl.image}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <p className={cl.description}>{meal.strMeal}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default MealsByCategory;
