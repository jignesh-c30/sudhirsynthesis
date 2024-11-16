// src/components/About.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AlphabetFilter from '../childComponents/AlphabetFilter';
import parentImpurity from '../../constants/parentImpurity';


function Products() {
  console.log(parentImpurity)
  return (
    <>
      <Header />
      <AlphabetFilter />
      <div>
        {parentImpurity?.map((k, index) => {
          return <div key={index}>{k?.name}</div>;
        })}
      </div>
      <Footer />
    </>
  );
}

export default Products;
