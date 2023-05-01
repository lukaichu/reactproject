import React, { useState, useContext } from 'react'
import { produqtebi } from '../Data/Data'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

export default function Products() {
  const [filteredProducts, setFilteredProducts] = useState(produqtebi);
  const { addToCart } = useContext(CartContext);

  const filterProducts = (category) => {
    const filtered = produqtebi.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  }
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div >
      <h1>products</h1>
      <button onClick={() => filterProducts('easy')}>Whey</button>
      <button onClick={() => filterProducts('hard')}>Amino</button>
      <button onClick={() => filterProducts('medium')}>Energy</button>
      <button onClick={() => filterProducts('large')}>Vitamins</button>
      <div className='head-prod'>
      {
            filteredProducts.map((product, idx) => (
          <div className='product1' key={idx}>
            <h3>{product.name}</h3>
            <img style={{width:'500px', height:'400px'}} src={product.img} alt="photo"/>
            <p>Price - {product.price}$</p>
            <div>
              {product.id  === 1 &&(
                <Link to="/protein">
              <button>See More</button>
              </Link>
)}
              {product.id  === 2 &&(
                <Link to="/creatine">
              <button>See More</button>
              </Link>
)}
              {product.id  === 3 &&(
                <Link to="/gainer">
              <button>See More</button>
              </Link>
)}
              {product.id  === 4 &&(
                <Link to="/bcaa">
              <button>See More</button>
              </Link>
)}

              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
           
          </div>
        ))
      }
      </div>
    </div>
  )
}
