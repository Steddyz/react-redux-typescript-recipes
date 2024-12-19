import { recipeApi } from "../services/recipeService";
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    recipe: recipeReducer,
    search: searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
