import React from "react";

import{Carousel} from "react-bootstrap";


const Carrousel =()=>{
    return(
        <>
 {/*agregar fade para efecto de transicion  */}
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pbs.twimg.com/media/DM8FiiUV4AA_GZE.jpg"
      alt="First slide"
     
      
      
      />
    <Carousel.Caption>
     <h2>PROMO 1</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    
    className="d-block w-100"
    src="https://pbs.twimg.com/media/DM8FiiUV4AA_GZE.jpg"
    alt="Second slide"
   
     
    />

    <Carousel.Caption>
    <h2>PROMO 2</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://pbs.twimg.com/media/DM8FiiUV4AA_GZE.jpg"
      alt="Third slide"
     
      
      
      />

    <Carousel.Caption>
    <h2>PROMO 3</h2>
   
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </>
)}

export default Carrousel