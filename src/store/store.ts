import { recipeApi } from "../services/recipeService";
import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../features/recipeSlice";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    recipe: recipeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
