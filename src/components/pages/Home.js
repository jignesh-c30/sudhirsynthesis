// src/components/Home.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../constants/data";
import ProductGrid from "../productGrid/ProductGrid";
import laptopBanner from "../../Assets/laptop_banner.svg";
import mobileBanner from "../../Assets/mobile_banner.svg";
// import { useNavigate } from "react-router-dom";
// import Button from "../childComponents/Button";

function Home() {

  return (
    <>
      <Header></Header>
      <div className="banner">
        <div className="bannerText">
          <div className="bannerMainText">STANDARDIZING THE STANDARDS</div>
          <div className="bannerSubText">
            We are offering you drug impurities, solvent standards, degradation
            impurities and custom synthesis products.
          </div>
          <div className="bannerSubText">
            Feel free to check and inquire our product section.
          </div>
  {/*<Button as="input" type="button" value="Products" onClick={handleProductClick}/>*/}
        </div>
        <div className="bannerImage">
          <picture>
            <source media="(max-width: 799px)" srcSet={mobileBanner} />
            <source media="(min-width: 800px)" srcSet={laptopBanner} />
            <img src={laptopBanner} alt="banner" />
          </picture>
        </div>
      </div>
      <br></br>
      <span className="featured-products">Featured Products</span>
      <br></br>
      <br></br>

      <div className="">
        <ProductGrid
          productsData={data?.filter((k) => k.feaatureInHomePage === 1)}
        ></ProductGrid>
      </div>
      <br></br>
      <Footer></Footer>
    </>
  );
}

export default Home;
