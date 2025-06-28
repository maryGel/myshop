import Header from '../components/header'; 
import ProductList from '../components/product_list';
import MenuList from '../components/menu';
import './productpage.css';



function ProductPage({ 
    products,
    cart,
    setCart,
    loadCart
  }){

    return (
      <div>    
      <Header cart = {cart}/>
      <MenuList />
      <ProductList 
        products = {products} 
        cart = {cart}
        setCart = {setCart}  
        loadCart = {loadCart}  
      />   
      </div>
    );
}
export default ProductPage;
