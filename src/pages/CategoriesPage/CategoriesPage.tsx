import { FC } from "react";

import cl from "./CategoriesPage.module.css";
import { useNavigate } from "react-router-dom";
import { useGetCategoriesQuery } from "../../services/recipeService";

const CategoriesPage: FC = () => {
  const { data, isLoading } = useGetCategoriesQuery();

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  if (isLoading) return <div className={cl.loading}>Загрузка...</div>;

  return (
    <>
      <h1 className={cl.title}>Категории</h1>

      <div className={cl.category}>
        {data?.categories &&
          data.categories.map((category) => (
            <div
              className={cl.category_wrapper}
              onClick={() => handleCategoryClick(category.strCategory)}
              key={category.idCategory}
            >
              <img
                className={cl.category_image}
                src={category.strCategoryThumb}
                alt={category.strCategoryDescription}
              />
              <p className={cl.category_title}>{category.strCategory}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CategoriesPage;
