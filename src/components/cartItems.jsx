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
      <div className='grid grid-cols-1 p-20 text-4xl border border-gray-300 rounded-lg cart-items-container'>

        {/* Delivery Header */}


        {/* item details */}
        { cart.map((cartItem) => {

          return (

            <div key = {cartItem.productId} className='w-full grid grid-cols-[28rem_1fr] gap-10 md:grid-cols-[32rem_1fr] lg:grid-cols-[40rem_1fr]'>
              

              <div className='w-full '>
                
                <img  className='p-5 mt-10 border border-gray-200 rounded-lg ' 
                      src = {cartItem.product.image} 
                      alt='Product Image' 
                />                
              </div>
    
              <div className='w-full pt-20 pr-5 md:px-10 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-10'>

                  <div>
                  <p>{cartItem.product.name}</p>
                  <p className='price'>Price: {formatMoney(cartItem.product.priceCents)}</p> 
                  <p className='quantity'>Quantity: {cartItem.quantity}</p>
                  <UpdateQuantity 
                      key = {cartItem.productId}
                      cartItem = {cartItem}
                      loadCart = {loadCart}                
                    />
                  </div> 
                  <div>
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
              </div>      
            </div>
          );
        })}
      </div> 
    </>
  );
}

export default CartItems;