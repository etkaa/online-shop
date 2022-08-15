import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CategoryPreview from "../../category-preview/CategoryPreview";
import Spinner from "../../spinner/Spinner";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/category.selector";

const CategoriesPreview = () => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
