// src/components/Home.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../constants/data";
import ProductGrid from "../productGrid/ProductGrid";
import background from "../../Assets/banner1.jpg";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="banner">
        <div className="bannerText">Long text</div>
        <div className="bannerImage"><img src={background} alt="banner"></img></div>
      </div>
      <br></br>
      <br></br>
      <div>
        <ProductGrid
          productsData={data?.filter((k) => k.feaatureInHomePage === 1)}
        ></ProductGrid>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
