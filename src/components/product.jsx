import axios from 'axios';
import { useState } from 'react';
import { formatMoney } from '../Utils/money';
import './product_list.css';


function Product( {product, loadCart} ) {
  const [quantity, setQuantity ] = useState(1);

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  // Function to handle adding the product to the cart
  const handleAddToCart = async() => {
    await axios.post (`${BASE_URL}/api/cart-items`, {
      productId: product.id,
      quantity: quantity
    });
    await loadCart();
    alert(`${product.name} has been added to your cart!`);
    }

  const handleQuantityChange = (e) => {
    const quantitySelected = Number(e.target.value);
    setQuantity(quantitySelected);
  }

  return (
    <div className="product-list-container">
      <a><img className="product-pic" src={product.image} alt="img" /></a>
      <p>{product.name}</p>  
      <div className="product-rating-container">
          <img className="product-rating-stars"
          src={`./images/ratings/rating-${product.rating.stars * 10}.png`} alt="rating"/>
          <div className="product-rating-count link-primary">
          {product.rating.count}
          </div>
      </div>
      <div className='product-price'>
        { formatMoney(product.priceCents) }
      </div>
      <div className='product-quantity-container'>
        <select className="quantity-selector" value= {quantity} onChange={handleQuantityChange} >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>{i + 1}</option>
          ))}
        </select>
      </div>

      {/* cart button */}

          <div className='cart-button-box'>
            <button className='cart-button' onClick= {handleAddToCart}>
              Add to Cart
            </button>
          </div>  
    </div>
  )
}

export default Product;