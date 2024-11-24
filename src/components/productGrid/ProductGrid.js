import React from "react";
import SingleProduct from "../childComponents/SingleProduct";
import { useEffect, useState } from "react";
import "./ProductGrid.css";

function ProductGrid({ productsData }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the number of cards per row based on screen size
  const getCardsPerRow = () => {
    if (screenWidth >= 1200) return 3; // large screens
    if (screenWidth >= 992) return 2; // medium screens
    if (screenWidth >= 576) return 2; // small screens
    return 1; // extra small screens
  };

  // Group products into rows based on the screen size
  const groupProducts = () => {
    const cardsPerRow = getCardsPerRow();
    const groupedProducts = [];

    for (let i = 0; i < productsData.length; i += cardsPerRow) {
      groupedProducts.push(productsData.slice(i, i + cardsPerRow));
    }

    return groupedProducts;
  };

  const groupedProducts = groupProducts();

  return (
    <div style={{display:'flex'}}>
      <div
        className="carousel-control-prev"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{position:'relative'}}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
        <span className="visually-hidden">Previous</span>
      </div>
      <div
        id="carouselExampleCaptions"
        className="carousel carousel-dark slide"
        data-bs-ride="false"
      >
        <div className="carousel-inner">
          {groupedProducts.map((group, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="card-group">
                {group.map((product, i) => (
                  <SingleProduct key={i} singleProductData={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="carousel-control-next"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        style={{position:'relative'}}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:'black'}}></span>
        <span className="visually-hidden">Next</span>
      </div>
    </div>
  );
}

export default ProductGrid;
