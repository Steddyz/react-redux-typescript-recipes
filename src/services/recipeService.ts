import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Recipe {
  idMeal: number;
  strMealThumb: string;
  strMeal: string;
  strArea: string;
}

interface MealResponse {
  meals: Recipe[];
}

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getRandomRecipe: builder.query<MealResponse, void>({
      query: () => `random.php`,
    }),
    searchRecipesByIngredient: builder.query<MealResponse, string>({
      query: (ingredient) => `filter.php?i=${ingredient.replace(/ /g, "_")}`,
    }),
  }),
});

export default recipeApi.reducer;
export const { useGetRandomRecipeQuery, useSearchRecipesByIngredientQuery } =
  recipeApi;
