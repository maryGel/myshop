import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../Utils/money';
import './deliveryOption.css';


function DeliveryOptions ( {
  cartItem,
  loadCart,
  deliveryOptions, 
  }){

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  return (
    <div key = {deliveryOptions.id} className = "place-order-summary">
      <div className='delivery-options-container'>
        <p>Delivery Options:</p>

        {deliveryOptions.map((option) => {
          const priceString = option.priceCents > 0 
            ? `${formatMoney(option.priceCents)} - Shipping` 
            : 'FREE Shipping';
 
          const handlePickDelivery = async () => {
            await axios.put(`${BASE_URL}/api/cart-items/${cartItem.productId}`, {
              deliveryOptionId: option.id
            });
            await loadCart();
          }

            return (

              <div 
                key={option.id} 
                className="delivery-option"
                onClick={handlePickDelivery}
              >
                <input
                  type="radio"
                  checked={option.id === cartItem.deliveryOptionId }
                  className="delivery-option-input"
                  name={`delivery-option-${cartItem.productId}`}
                />
                {dayjs(option.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                <span>{priceString}</span>
              </div>         
            )
        })}
      </div> 


    </div>
    );  
}

export default DeliveryOptions;