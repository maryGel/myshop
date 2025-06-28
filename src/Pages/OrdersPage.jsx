import axios from 'axios';
import { useEffect, useState, Fragment } from 'react';
import dayjs from 'dayjs';
import Header from '../components/header'; 
import { formatMoney } from '../Utils/money';
import './orderspage.css';


function OrdersPage( {cart, loadCart} ) {

  //implement env variable for API base URL
  const BASE_URL = import.meta.env.VITE_API_URL;

  const [orders, setOrders] = useState([]);
  // Fetch orders from the API when the component mounts
  useEffect(() => {

    const fetchDataOrders = async() => {
      const response = await axios.get(`${BASE_URL}/api/orders?expand=products`);
      setOrders(response.data);
      await loadCart();
    };
    
    fetchDataOrders();
  }
  , []);
  // Render the orders page


  return (
    <>
      <title>Orders</title>

      <Header cart = {cart}/>

      {orders.map((order) => {

        return (
          <div key ={order.id}className="orders-page">
          <div className="page-title">Your Orders</div>
  
          <div className="orders-grid">
            <div className="order-container">
  
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(order.orderTimeMS).format('MMMM D')}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(order.totalCostCents)}</div>
                  </div>
                </div>
  
                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>             
  
              <div className="order-details-grid">               
                {order.products.map((orderProduct)=>{
                  return (  
                    <Fragment key={orderProduct.product.id}>
                      <div className="product-image-container">
                        <img src= {orderProduct.product.image} />
                      </div>
        
                      <div className="product-details">
                        <div className="product-name">
                          {orderProduct.product.name}
                        </div>
                        <div className="product-delivery-date">
                          Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format('MMMM D')}
                        </div>
                        <div className="product-quantity">
                          Quantity: {orderProduct.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                          <img className="buy-again-icon" src= "./images/icons/buy-again.png" />
                          <span className="buy-again-message">Buy Again</span>
                        </button>
                      </div>
                      <div className="product-actions">
                        <a href="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </a>
                      </div>                    
                    </Fragment>                  
                  );
                })} 

              </div>
            </div> 
          </div>
        </div>
        )
      })
      }
    </>
  );
}


export default OrdersPage;