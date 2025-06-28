// import React from 'react';
// import { Carousel } from 'antd';
import './carousel.css'; // Assuming you have a CSS file for styling


function CarouselContainer() {


  return(
    <Carousel autoplay className="carouselContainer" dotPosition="top"> 

      <div className="carouselItem">
        <img className="carouselImage" src="./images/carouselImages/bigsalepage1.jpeg" alt="Image 1" />
      </div>
      
      <div className="carouselItem">
        <img className="carouselImage" src="./images/carouselImages/carouselp2.jpeg" alt="Image 2" />
      </div>

      <div className="carouselItem">
        <img className="carouselImage" src="./images/carouselImages/black-friday.jpeg" alt="Image 3" />
      </div>

      <div className="carouselItem">
        <img className="carouselImage" src="./images/carouselImages/carouselpage4.jpeg" alt="Image 4" />
      </div>
  </Carousel>

  );
}


export default CarouselContainer;