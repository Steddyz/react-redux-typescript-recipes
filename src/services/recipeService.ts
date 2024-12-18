import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Recipe {
  idMeal: number;
  strMealThumb: string;
  strMeal: string;
  strArea: string;
}

interface RandomMealResponse {
  meals: Recipe[];
}

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/json/v1/1/",
  }),
  endpoints: (builder) => ({
    getRandomRecipe: builder.query<RandomMealResponse, void>({
      query: () => `random.php`,
    }),
  }),
});

export default recipeApi.reducer;
export const { useGetRandomRecipeQuery } = recipeApi;
