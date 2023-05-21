import Carousel from 'react-bootstrap/Carousel';
function ImageCarousel({imgs}) {
  return (
    <Carousel>
      {
        imgs.map((item,index)=>{
          return (
            <Carousel.Item>
        <img
          className="d-block "
          style={{width:"100%",height:"500px"}}
          src= {item}
        />
        
      </Carousel.Item>
          )
        })
      }
      
    </Carousel>
  );
}

export default ImageCarousel;