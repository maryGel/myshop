import Header from '../components/header'; 
import MainContent from '../components/content'; 
import FooterContainer from '../components/footer';
import './homepage.css'; 


function HomePage({cart}) { 


  return ( 
    <div > 
        <Header 
          cart = {cart} 
        />
        <div className = "homepage-layout">
          <MainContent />
        </div>
        <FooterContainer />
    </div> 
  ); 
} 
  
  
  export default HomePage;