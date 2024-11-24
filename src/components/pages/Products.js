// src/components/About.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AlphabetFilter from "../childComponents/AlphabetFilter";
import parentImpurity from "../../constants/parentImpurity";
import { useParams } from 'react-router-dom';

function Products() {
  const { productChar } = useParams();
  // console.log(productChar);
  // console.log(parentImpurity);

  return (
    <>
      <Header />
      <AlphabetFilter />
      <div className="container">
        <div className="row">
        <div className="col-sm-12 catlist">
        {
          productChar === "All" 
          ? parentImpurity?.length > 0 && parentImpurity.map((k, index) => {
              return (
                <div className="col-3 clsDivMaincat" key={index}>
                  {k?.name}
                </div>
              );
            }) 
          : parentImpurity?.filter((k) => k?.firstChar === productChar)?.map((k, index) => {
              return (
                <div className="col-3 clsDivMaincat" key={index}>
                  {k?.name}
                </div>
              );
            })
        }
      </div>
      
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
