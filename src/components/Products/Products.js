import { Fragment } from "react";

import ProductDescription from "./ProductDescription";
import IsAvailable from "./IsAvailable";

const Products = () => {
  return (
    <Fragment>
      <ProductDescription />
      <IsAvailable />
    </Fragment>
  );
};

export default Products;
