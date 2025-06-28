import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { formatMoney } from '../Utils/money';
import './payment_summary.css'

function PaymentSummary({paymentSummary, loadCart}) {

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  // Function to create an order and navigate to the order confirmation page

  const createOrder = async () => {  
    await axios.post(`${BASE_URL}/api/orders`);
    await loadCart();
    navigate('/ordersPage');
  };

  return (
    <div className="payment-summary">
      <div className="payment-summary-title">
        Payment Summary
      </div>

      <div className="payment-summary-row">
        <div>Items ({paymentSummary.totalItems}):</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money total-amount">{formatMoney(paymentSummary.totalCostCents)}</div>
      </div>


        <button className="place-order-button"
          onClick={createOrder}          
        >
          Place your order
        </button>      


  </div>

  );
}

export default PaymentSummary;