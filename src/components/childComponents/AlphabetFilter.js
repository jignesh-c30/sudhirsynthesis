import React from "react";
import "./SingleProduct.css";

function AlphabetFilter() {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    return (
      <>
        <div className="linearAlphabets">
          {alphabets.map((k, index) => {
            return <div key={index}>{k}</div>;
          })}
        </div>
      </>
    );
  }
  export default AlphabetFilter;
  