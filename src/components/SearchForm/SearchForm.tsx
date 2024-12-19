import { FC, FormEvent, useState, MouseEvent } from "react";

import cl from "./SearchForm.module.css";
import Button from "../Button/Button";
import { useAppDispatch } from "../../hooks/hooks";
import { setFitler } from "../../features/searchSlice";

const SearchForm: FC = () => {
  const [symbol, setSymbol] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSearchRecipe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFitler(symbol));
  };

  const handleSearchRecipeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(setFitler(symbol));
  };

  return (
    <div>
      <form className={cl.form} onSubmit={handleSearchRecipe}>
        <input
          className={cl.input}
          placeholder="Поиск рецепта"
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button value={"Поиск"} onClick={handleSearchRecipeClick} />
      </form>
    </div>
  );
};

export default SearchForm;
