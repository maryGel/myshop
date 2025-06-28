import { useNavigate }  from 'react-router-dom';
import React from 'react'; 
import CarouselContainer from './carousel'; 
import MenuList from './menu';
import CategoryList from './category_section';
import './content.css'; 


function MainContent( ) { 

  const navigate = useNavigate();

  const GotoProductPage = (e) => {
    navigate('/productPage');
    e.preventDefault();
  }
  // This is the content of the application 
  return ( 
      <div className='content-container' >
        <MenuList GotoProductPage = {GotoProductPage}/>
        {/* <CarouselContainer  />  */}
        <CategoryList 
          GotoProductPage = {GotoProductPage}
    
        />
      </div>
  ); 
} 

export default MainContent;