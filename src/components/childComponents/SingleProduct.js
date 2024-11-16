import React from "react";
import "./SingleProduct.css";

function SingleProduct({ singleProductData }) {
  const { name, imageUrl, catNo, casNo, molecularFormula, molecularWeight, inventoryStatus } = singleProductData;
  //   console.log(props);
  return (
    <>
      <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-content">
          <img src={imageUrl} alt={`${name} Structure`} />
          <ul className="info-list">
            <li>
              <strong>CAT No:</strong> {catNo}
            </li>
            <li>
              <strong>CAS No:</strong> {casNo}
            </li>
            <li>
              <strong>Mol.F:</strong> {molecularFormula}
            </li>
            <li>
              <strong>Mol.Wt.:</strong> {molecularWeight}
            </li>
          </ul>
          <div className="inventory-status">
            <strong>Inv. Status:</strong>{" "}
            <span
              className={
                inventoryStatus === "In Stock" ? "in-stock" : "out-of-stock"
              }
            >
              {inventoryStatus}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
