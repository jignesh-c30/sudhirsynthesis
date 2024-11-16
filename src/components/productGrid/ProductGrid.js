import React from "react";
import SingleProduct from "../childComponents/SingleProduct";
import "./ProductGrid.css";

function ProductGrid({ productsData }) {
  return (
    <>
      <div className="productGrid">
        {productsData.length > 0 &&
          productsData.map((k) => {
            return <SingleProduct singleProductData={k}></SingleProduct>;
          })}
      </div>
    </>
  );
}

export default ProductGrid;
