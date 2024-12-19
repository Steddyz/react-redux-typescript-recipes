import { FC, useState, ChangeEvent, FormEvent } from "react";

import cl from "./IngredientsForm.module.css";
import { useSearchRecipesByIngredientQuery } from "../../services/recipeService";

const IngredientsForm: FC = () => {
  const [searchIngred, setSearchIngred] = useState("");
  const { data } = useSearchRecipesByIngredientQuery(searchIngred, {
    skip: searchIngred.trim() === "",
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchIngred(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={cl.ingredients_title}>
      <h1 className={cl.title}>Поиск по ингредиентам</h1>
      <hr />
      <form className={cl.ingredients_form} onSubmit={handleSubmit}>
        <div className={cl.form_group}>
          <label className={cl.form_label}>Желаемые ингредиенты </label>
          <input
            className={cl.form_input}
            placeholder="Введите желаемые ингредиенты"
            onChange={handleSearch}
          />
        </div>
        <div className={cl.recipes_wrapper}>
          {data?.meals && data.meals.length > 0 ? (
            <div className={cl.recipes_inner}>
              {data?.meals.map((recipe) => (
                <div className={cl.recipes_item} key={recipe.idMeal}>
                  <img
                    className={cl.image}
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                  />
                  <p>{recipe.strMeal}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={cl.description_Wrapper}>
              <p className={cl.description}>No results</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default IngredientsForm;
