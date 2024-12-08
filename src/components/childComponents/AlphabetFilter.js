import React from "react";
import "./SingleProduct.css";
import { useNavigate } from "react-router-dom";

function AlphabetFilter() {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const navigate = useNavigate();
  const handleCharacterClick = (k) => {
    navigate(`/products/${k}`);
  };
  return (
    <>
      <div className="linearAlphabets container">
        {alphabets.map((k, index) => {
          return (
            <div key={index} onClick={()=>handleCharacterClick(k)}>
              {k}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AlphabetFilter;
