import { Link }  from 'react-router-dom';
import './category_section.css'

function CategoryList({GotoProductPage}) {

  return (
    <div>
      <div className='product-text'>
        <h2><strong>CHOOSE YOUR STYLE</strong></h2>
        <p>Discover the season’s key looks & trends.</p>
        <p>Get Inspired</p>
      </div>

      <div className="category-container"> 
        {/* category1 */}
        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/bag-category.png" alt="bag" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>BAGS</p>
          </div>
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/jewelry-category.jpeg" alt="jewelry" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>JEWELRY</p>
          </div>   
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/dress-category.png" alt="dress" />
          </Link>
          <div className="category">
            <p onClick={GotoProductPage}>CLOTHING</p>
          </div> 
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/shoes-category.jpeg" alt="shoe" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>SHOES</p>
          </div>   
        </div>  
      </div>

      <div className='product-text'>
        <h2><strong>EXPLORE MORE ESSENTIALS</strong></h2>
        <p>Discover everyday luxuries and
            and enjoy amazing deals from
            well-loved brands when you
            shop online.</p>
        <p>Shop More</p>
      </div>

      <div className="category-container"> 
        {/* category1 */}
        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/home-category.png" alt="home" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>HOME DECOR</p>
          </div>
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/makeup-category.png" alt="makeup" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>MAKEUP</p>
          </div>   
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/fragrances-category.png" alt="fragrances" />
          </Link>
          <div className="category">
            <p onClick={GotoProductPage}>FRAGRANCES</p>
          </div> 
        </div>    

        <div className='product-cover-container'>
          <Link to="/productPage">
            <img className="product-img" src="images/categories/skincare-category.png" alt="skeincare" />
          </Link>
          <div className="category">
          <p onClick={GotoProductPage}>SKIN CARE</p>
          </div>   
        </div>  
      </div>

        <div className='product-text'>
          <h2><strong>SHOP SPRING/SUMMER 2025 COLLECTION</strong></h2>
        </div>

      <br></br>
    </div>
  )

}

export default CategoryList;