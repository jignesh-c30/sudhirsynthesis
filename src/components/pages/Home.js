// src/components/Home.js
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import data from "../../constants/data";
import ProductGrid from "../productGrid/ProductGrid";
import laptopBanner from "../../Assets/laptop_banner.svg";
import mobileBanner from "../../Assets/mobile_banner.svg";
import { useNavigate } from 'react-router-dom';
import Button from "../childComponents/Button"

function Home() {

  const navigate = useNavigate(); // React Router hook to navigate programmatically

  const handleProductClick = () => {
    // Navigate to another page when button is clicked
    navigate('/products');
  };
  return (
    <>
      <Header></Header>
      <div className="banner">
        <div className="bannerText">
          <div style={{'fontSize':'2.3vw', 'fontWeight':'700'}}>STANDARDIZING THE STANDARDS</div>
          <br></br>
          <div style={{'fontSize':'1.3vw', 'fontWeight':'400'}}>We are offering you drug impurities, solvent standards, degradation impurities and custom synthesis products.</div>
          <div style={{'fontSize':'1.3vw', 'fontWeight':'400'}}>Feel free to check and inquire our product section.</div>
          <br></br>
          <Button as="input" type="button" value="Products" onClick={handleProductClick}/>
        </div>
        <div className="bannerImage">
          <picture>
            <source media="(max-width: 799px)" srcset={mobileBanner} />
            <source media="(min-width: 800px)" srcset={laptopBanner} />
            <img
              src={laptopBanner}
              alt="banner"
            />
          </picture>
        </div>
      </div>
      <br></br>
      <span style={{'borderBottom':'2px dashed black', "margin":"2%", "fontSize":"1.8vw"}}>Featured Products</span>
      <br></br>
      <br></br>

      <div>
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
