// src/components/About.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AlphabetFilter from "../childComponents/AlphabetFilter";
import parentImpurity from "../../constants/parentImpurity";
import { useParams } from "react-router-dom";
import "../../index.css";

function Products() {
  const { productChar } = useParams();
  // console.log(productChar);
  // console.log(parentImpurity);

  return (
    <>
      <Header />
      <AlphabetFilter />
      <div class="h-divider container">
        <div class="shadoww"></div>
      </div>
      <div className="container">
        <div className="col-sm-12 catlist row justify-content-around">
          {productChar === "All" ? (
            parentImpurity?.length > 0 ? (
              parentImpurity.map((k, index) => (
                <div
                  className="col-lg-3 col-md-5 col-sm-12 clsDivMaincat"
                  key={index}
                >
                  {k?.name}
                </div>
              ))
            ) : (
              <div className="no-data-label">No data available</div>
            )
          ) : parentImpurity?.filter((k) => k?.firstChar === productChar)
              ?.length > 0 ? (
            parentImpurity
              .filter((k) => k?.firstChar === productChar)
              .map((k, index) => (
                <div
                  className="col-lg-3 col-md-5 col-sm-12 clsDivMaincat"
                  key={index}
                >
                  {k?.name}
                </div>
              ))
          ) : (
            <div className="no-data-label">No data available</div>
          )}
        </div>
      </div>
      <br></br>
      <div class="h-divider container">
        <div class="shadoww"></div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
