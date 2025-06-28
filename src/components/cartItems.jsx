import React from 'react';
import { formatMoney } from '../Utils/money';
import UpdateQuantity from './quantity';
import DeliveryOptions from './deliveryOption';
import './cartItems.css';

function CartItems ( { 
    cart, 
    loadCart, 
    paymentSummary,
    deliveryOptions, 
    selectedDeliveryOptionId, 
    updateDeliveryOption
  
  }){

    if (!cart || cart.length === 0) {
      return <div className="noCart">No item has been added to the cart yet.</div>;
    }
  
  return (
    <>
      <div className='cart-items-container'>

        {/* Delivery Header */}
        <div className='delivery-header'>

          <h1>Cart Items: </h1>
        </div>

        {/* item details */}
        { cart.map((cartItem) => {

          return (

            <div key = {cartItem.productId} className='item-details-container'>

              <div className='item-image-container'>
                <img className='item-image' src = {cartItem.product.image} alt='Product Image'  />
              </div>
    
              <div className='item-details'>
                <p>{cartItem.product.name}</p>
                <p className='price'>Price: {formatMoney(cartItem.product.priceCents)}</p>    
              </div>

              <UpdateQuantity 
                key = {cartItem.productId}
                cartItem = {cartItem}
                loadCart = {loadCart}                
              />

              <DeliveryOptions
                deliveryOptions={deliveryOptions}
                cart = {cart}
                cartItem = {cartItem}
                loadCart={loadCart}
                paymentSummary={paymentSummary}
                selectedDeliveryOptionId={selectedDeliveryOptionId}
                updateDeliveryOption={updateDeliveryOption}
              />  

            </div>
          );
        })}
      </div> 
    </>
  );
}

export default CartItems;