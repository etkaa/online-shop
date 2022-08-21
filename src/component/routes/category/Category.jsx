import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../../store/categories/category.selector";

import ProductCard from "../../product-card/ProductCard";
import Spinner from "../../spinner/Spinner";

import "./Category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <div className="title-container">
      <h2 className="category-title">{category.toUpperCase()}</h2>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
