import axios from 'axios';
import { useEffect, useState,  } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CheckOutPage from './Pages/CheckoutPage';
import OrdersPage from './Pages/OrdersPage';
import './index.css';

function App() {

    const [products, setProducts] = useState([]);  
    const [cart, setCart] = useState([]);
    const [deliveryOptions, setDeliveryOptions] = useState([]); 
    const [selectedDeliveryOptionId, setSelectedDeliveryOptionId] = useState('1'); // Default to first option
    const [paymentSummary, setPaymentSummary] = useState({});

    //implement env variable for API base URL
    const BASE_URL = import.meta.env.VITE_API_URL;

    //refresh the page
    const loadCart = async () => {
      const response = await axios.get(`${BASE_URL}/api/cart-items?expand=product`);
      console.log("Cart data:", response.data);
      setCart(response.data);
    }

    //Fetch the products
    useEffect(() => {
      const fetchDataProducts = async () => {
        let response = await axios.get(`${BASE_URL}/api/products`);
        setProducts(response.data);
        loadCart();
      }
      fetchDataProducts();
    }, []);

    // Fetch delivery options
    useEffect(() => {
      const fetchDeliveryOptions = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/api/delivery-options?expand=estimatedDeliveryTime`);
          setDeliveryOptions(response.data);
          // Set default delivery option
          if (response.data.length > 0) {
            setSelectedDeliveryOptionId(response.data[0].id);
          }
        } catch (error) {
          console.error('Error fetching delivery options:', error);
        }
      };
      fetchDeliveryOptions();
    }, [setDeliveryOptions, setSelectedDeliveryOptionId]);
  

  return (
    <Routes>
      <Route path="/" element={<HomePage 
        cart = {cart} 
      />} />
      
      <Route path="/productPage" element={<ProductPage
        products = {products} 
        cart = {cart}
        setCart = {setCart} 
        loadCart = {loadCart}
      />} />

      <Route path="/checkOutPage" element={<CheckOutPage
        products = {products} 
        cart = {cart}
        loadCart = {loadCart}
        deliveryOptions = {deliveryOptions}
        setDeliveryOptions = {setDeliveryOptions}
        selectedDeliveryOptionId = { selectedDeliveryOptionId}
        paymentSummary = { paymentSummary}
        setPaymentSummary = { setPaymentSummary}

      />} />

      <Route path="/ordersPage" element={<OrdersPage
        cart = {cart}
        loadCart = {loadCart}
      />} />

    </Routes>
  )
}

export default App
