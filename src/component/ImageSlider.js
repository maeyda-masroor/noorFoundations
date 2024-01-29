import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';
function Slide() {
  return (
    <div>
          <Carousel> 
        <Carousel.Item interval={1500}> 
          <img 
            className="d-block"
src="1.jpeg" style={{width:'100%', height:'600px'}}
            alt="Image One"
          /> 
          <Carousel.Caption> 
            <h3>Label for first slide</h3> 
            <p>Sample Text for Image One</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
        <Carousel.Item interval={500}> 
          <img 
            className="d-block"
src="2.jpeg" style={{width:'100%',height:'600px'}}
            alt="Image Two"
          /> 
          <Carousel.Caption> 
            <h3>Label for second slide</h3> 
            <p>Sample Text for Image Two</p> 
          </Carousel.Caption> 
        </Carousel.Item> 
      </Carousel> 
        
    </div>
  );
}

export default Slide;