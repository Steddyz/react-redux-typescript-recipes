import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Recipe {
  idMeal: number;
  strMealThumb: string;
  strMeal: string;
  strArea: string;
  [key: string]: string | number | undefined;
}

export interface Category {
  strCategory: string;
  idCategory: number;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

interface CategoriesResponse {
  categories: Category[];
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
    searchRecipes: builder.query<MealResponse, string>({
      query: (symbol) => `search.php?s=${symbol}`,
    }),
    getCategories: builder.query<CategoriesResponse, void>({
      query: () => `categories.php`,
    }),
  }),
});

export default recipeApi.reducer;
export const {
  useGetRandomRecipeQuery,
  useSearchRecipesByIngredientQuery,
  useSearchRecipesQuery,
  useGetCategoriesQuery,
} = recipeApi;
