import React, { useState, useContext } from 'react'
import ImageSlider from "../ImageSlider/ImageSlider";
import { produqtebi } from "../Data/Data";
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';



  const Home = () => {
    const slides = [
      { url: "https://media.bodyandfit.com/i/bodyandfit/ONUK-triplehotspot-GSW-two-flavor?", title: "forest" },
      { url: "https://cdn.mrsupplement.com.au/images/uploads/mrsupplement/2023/optimum-nutrition-ai-2.jpg", title: "boat" },
      { url: "https://sportsmintmedia.com/wp-content/uploads/2021/09/Optimum-Nutrition-ropes-in-Rishabh-Pant-as-new-brand-athlete.jpg" },
      { url: "https://content.optimumnutrition.com/i/on/on-understanding-optimum-nutrition-gold-standard-100-whey-protein_Image_01?locale=en-us,en-gb,*&layer0=$OPEN_GRAPH$", title: "city" },
      { url: "https://cdn.shopify.com/s/files/1/0570/5728/0191/collections/optimum_nutrition.jpg?v=1665999483", title: "italy" },
    ];
    const containerStyles = {
      width: "100%",
      height: "550px",
      margin: "0 auto",
    };
   
  const { addToCart } = useContext(CartContext);

  
  const handleAddToCart = (product) => {
    addToCart(product);
  };


    return (
<div>
      
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
      </div>
      <h1 style={{marginTop:'30px'}}>custumer favorite suplements</h1>
      <div className="head-prod">
        {produqtebi
          .filter((product) => product.id < 5)
          .map((product, idx) => {
            return (
              <div className="product1" key={idx}>
                <h3 className="name">{product.name}</h3>
                <img
                  style={{ width: "500px", height: "400px" }}
                  src={product.img}
                  alt="photos"
                />
                <h4 className="price">Price - {product.price}$</h4>
                <div>
                  {product.id === 1 && (
                    <Link to="/protein">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 2 && (
                    <Link to="/creatine">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 3 && (
                    <Link to="/gainer">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  {product.id === 4 && (
                    <Link to="/bcaa">
                      <button className="but1">More Info</button>
                    </Link>
                  )}
                  <button
                    className="but2" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
    )
  }


  export default  Home;