import { Recipe } from "@/services/recipeService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RecipeState {
  selectedRecipe: Recipe | null;
}

const initialState: RecipeState = {
  selectedRecipe: null,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setSelectedRecipe(state, action: PayloadAction<Recipe>) {
      state.selectedRecipe = action.payload;
    },
    clearSelectedRecipe(state) {
      state.selectedRecipe = null;
    },
  },
});

export const { setSelectedRecipe, clearSelectedRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
