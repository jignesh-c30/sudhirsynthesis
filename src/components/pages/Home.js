// src/components/Home.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../constants/data";
import ProductGrid from "../productGrid/ProductGrid";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="banner">
      <div>
      <img src=""></img>
      </div>
      </div>
      <div>
        <ProductGrid productsData={data?.filter((k)=>k.feaatureInHomePage===1)}></ProductGrid>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
