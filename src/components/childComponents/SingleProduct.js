import React from "react";
import "./SingleProduct.css";

function SingleProduct({ singleProductData }) {
  const { name, imageUrl, catNo, casNo, molecularFormula, molecularWeight, inventoryStatus } = singleProductData;
  const imgSrc = require(`../../Assets/Impurities/${imageUrl}`);
  return (
    <>
      <div className="card col-lg-3 col-md-6 col-sm-12 m-1">
        <div className="card-header">{name}</div>
        <div className="card-content">
          <div>
            <img
              // src={imageUrl}
              src={imgSrc}
              alt={`${name} Structure`}
              style={{ maxWidth: "100%" }}
            />
          </div>
          <div>
            <table className="table table-sm">
              <tbody>
                <tr>
                  <th scope="row">CAT No:</th>
                  <td>{catNo}</td>
                </tr>
                <tr>
                  <th scope="row">CAS No:</th>
                  <td>{casNo}</td>
                </tr>
                <tr>
                  <th scope="row">Mol.F:</th>
                  <td>{molecularFormula}</td>
                </tr>
                <tr>
                  <th scope="row">Mol.Wt.:</th>
                  <td>{molecularWeight}</td>
                </tr>
                <tr>
                  <th scope="row">Inv. Status:</th>
                  <td>{inventoryStatus}</td>
                </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
