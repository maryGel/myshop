import Product from './product';
import './product_list.css';

function ProductList({products, loadCart}) {

  // function handleAddToCart(product) {
  //   const existingItem = cart.find(item => item.id === product.id);

  //   let updatedCart;
  //   if (existingItem) {
  //     updatedCart = cart.map(item =>
  //       item.id === product.id
  //         ? { ...item, quantity: item.quantity + 1 }
  //         : item
  //     );
  //   } else {
  //     updatedCart = [...cart, { ...product, quantity: 1 }];
  //   }

  //   setCart(updatedCart);
  // }


  return (
    <div>
      <div className='product-list-section'>

        {products.map((product) => {
          return (
            <Product 
            key = {product.id}
            product = {product}
            loadCart = {loadCart} 
            />
          );
        })}

      </div>   
    </div>

  )
}

export default ProductList;