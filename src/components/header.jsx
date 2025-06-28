import React from 'react';
import { useNavigate} from 'react-router-dom'
import './header.css';
import './header_media.css'

function Header({cart = []}) {

  const navigate = useNavigate();
  // Function to handle search input submission
  const GotoHomepage = (e) => {
    navigate('/');
    e.preventDefault();
  }

  const GotoCheckOutPage = (e) => {
    navigate('/checkOutPage');
    e.preventDefault();
  }

  // let totalQuantity =  0;

  // cart.forEach((cartItem) => {
  //   totalQuantity += cartItem.quantity;
  // });

  const totalQuantity = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return(
    <div>
      <div className="header-top">
        <p>FIND YOUR SIGNATURE: OUR ICONIC LOGO IS MADE TO MOVE  |  SHOP THE WORLD OF SIGNATURE</p>
      </div>
      
      <div className="header"> 

          {/* Homepage logo */}
          <div className='logo-container'>
            
            <img 
              className="logo" 
              src="./images/mylogo.png" 
              alt="logo" 
              onClick={GotoHomepage} // Navigate to homepage on logo click
            />
          </div>

          {/* Homepage Search + header icons */}

          <div className='header-content'>

            {/* Search Bar section */}
            <div className='search-bar-container'> 
              <div className='search-bar'>  

                {/* Search Input  */}
                <input className="search-input" type="text" placeholder="Search" />

                {/* Search Bar icons */}
                  <div className='search-icon-container'>
                    <button>
                      <span className="search-icons material-symbols-outlined">image_search</span>
                    </button>
                    <button>
                      <span className="search-icons material-symbols-outlined">mic</span>
                    </button>
                    <button>                  
                      <span className="search-icons material-symbols-outlined">search</span>
                    </button>               
                  </div> 

                 {/* Single icon for media query */}

              </div>
              <button className="single-search-icon">                  
                  <span className="search-icon material-symbols-outlined">search</span>
              </button>  

            </div>

            {/* Header Icons */}
            
              <div className="header-icons-container">
                <ul className = "header-list">
                  <li className = "cart-badge-container" >
                      <a onClick={GotoCheckOutPage}><span className="header-icons material-symbols-outlined">shopping_bag</span>               
                      {totalQuantity > 0 && (
                        <div className='cart-badge'>
                          {totalQuantity}
                        </div>
                      )} 
                      </a>
                  </li>
                  <li><a href="#"><span className="header-icons material-symbols-outlined">storefront</span></a></li>
                  <li><a href="#"><span className="header-icons material-symbols-outlined">account_circle</span></a></li>
                  <li><a href="#"><span className="menu-icon material-symbols-outlined">menu</span></a></li>
                </ul>
              </div>           
          </div>   
      </div>
    </div>
    
  )
}
export default Header;

