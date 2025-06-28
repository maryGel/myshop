import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './cartItems.css';

function UpdateQuantity ({ cart, cartItem, loadCart }) {
  
  const [updateCart, setUpdateCart] = useState(cartItem.quantity);

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    setUpdateCart(cartItem.quantity);
  }, [cart, cartItem.quantity]);
  
  const handleUpdate = async (newQuantity) => {
    try {
      await axios.put(`${BASE_URL}/api/cart-items/${cartItem.productId}`, {
        quantity: newQuantity
      });
      await loadCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
      setUpdateCart(cartItem.quantity); // Revert on error
      alert('Failed to update quantity. Please try again.');
    } 
  };
  
  const minusCount = async() => {
    const newQty = Math.max(updateCart - 1); // Minimum 1

    // Check for zero first

    if (newQty <= 0) {
      if (window.confirm('Remove this item from your cart?')) {
        await deleteCartItem();
      } else {
        setUpdateCart(1); // Reset to 1 if user cancels
      }
    } else {
      setUpdateCart(newQty);
      await handleUpdate(newQty);
    }
  };
  
  const plusCount = async() => {
    const newQty = updateCart + 1;
    setUpdateCart(newQty);
    await handleUpdate(newQty);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^[0-9]*$/.test(value)) {
      const newQty = value === '' ? '' : parseInt(value, 10);
      setUpdateCart(newQty);
    }

  };

  const handleBlur = () => {
    // Handle when input loses focus
    if (updateCart === '' || updateCart < 1) {
      const newQty = 1;
      setUpdateCart(newQty);
      handleUpdate(newQty);
    } else if (updateCart === 0) {
      deleteCartItem();
    } else if (updateCart !== cartItem.quantity) {
      handleUpdate(updateCart);
    }
  };

  const deleteCartItem = async () => {
    try {
      await axios.delete(`${BASE_URL}/api/cart-items/${cartItem.productId}`);
      await loadCart();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Failed to delete item. Please try again.');
      // Reset to 1 if deletion fails
      setUpdateCart(1);
    }
  };
  
  return(
    <div key= {cartItem.id} className='update-quantity-container'>
    <button onClick= {minusCount} className='update-qty-button'>-</button>
    <input 
      type='text' 
      value={updateCart} 
      onChange={handleInputChange} 
      onBlur={handleBlur}
      className='qty-input' 
    />
    <button onClick= {plusCount} className='update-qty-button'>+</button>
  </div>  
  );
}

export default UpdateQuantity;