import { FC } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

const RecipesPage: FC = () => {
  return (
    <>
      <SearchForm />
      <RecipeCard />
    </>
  );
};

export default RecipesPage;
