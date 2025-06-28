import axios from 'axios';
import { useEffect} from 'react';
import Header from '../components/header'; 
import CartItems from '../components/cartItems';
import PaymentSummary from '../components/payment_summary';
import './checkoutpage.css';


function CheckOutPage({
  cart, 
  loadCart,
  deliveryOptions,
  setSelectedDeliveryOptionId,
  paymentSummary,
  setPaymentSummary,
  selectedDeliveryOptionId,
  updateDeliveryOption

  }){  

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  // Fetch payment summary
  useEffect(() => {
    const fetchPaymentSummary = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/payment-summary`);
        setPaymentSummary(response.data);
      } catch (error) {
        console.error('Error fetching payment summary:', error);
      }
    };
    fetchPaymentSummary();
  }, [cart, deliveryOptions, setPaymentSummary]);
  
  return(

    <div>
      <Header cart = {cart}
      />
      <div className='checkout-container'>
        <h1 className='checkout-title'>Checkout ( {paymentSummary.totalItems || 0 } items )</h1>
      </div>
      <div className='checkout-grid'>
        <CartItems 
          cart = {cart}
          loadCart = {loadCart}
          paymentSummary = {paymentSummary}
          selectedDeliveryOptionId={selectedDeliveryOptionId}
          setSelectedDeliveryOptionId={setSelectedDeliveryOptionId}
          deliveryOptions={deliveryOptions}
          updateDeliveryOption={updateDeliveryOption}
        />      
      </div>
      <PaymentSummary
        cart={cart}
        deliveryOptions={deliveryOptions}
        selectedDeliveryOptionId={selectedDeliveryOptionId}
        loadCart={loadCart}
        paymentSummary={paymentSummary}
      />
    </div>
  );
}

export default CheckOutPage;