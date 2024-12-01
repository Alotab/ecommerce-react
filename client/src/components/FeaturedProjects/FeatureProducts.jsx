import React, { useEffect, useState } from "react";
import Card from '../Card/Card'
import "./FeaturedProjects.scss";
import useFetch from "../../hooks/useFetch";



const FeaturedProducts = () => {
  const { data, loading, error } = useFetch('https://api.escuelajs.co/api/v1/products');



  return (
    <div className="featuredProducts">
      <div className="top">
        {/* <h1>{type} products</h1> */}
        <h1>Products</h1>
        <p>
        Firefox is backed by the Mozilla Foundation – a global community working to keep the internet open and accessible to all. It’s up to all of us to take on irresponsible tech companies and protect our privacy online.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : data?.slice(0,4).map((item) => <Card key={item.id} item={item} />)}
      </div>
      {/* <div className="bottom">
        {data?.slice(0, 4).map((item) => { 
          console.log('ITEM:', item.images[0]);
          <Card item={item} key={item.id} />
        })}
      </div> */}

      {/* <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div> */}
    </div>
  );
};

export default FeaturedProducts;