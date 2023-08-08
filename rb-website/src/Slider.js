import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
    return (
     
      <>
      
<Carousel>
      <Carousel.Item className='slider1'>
        <div className='banner'>
          <img className="d-block w-100" src={require('./image/banner1.jpg')}></img>
        </div>

        <Carousel.Caption className='slider_title'>
          <h1 className='h1'>Fresh & Fast</h1>
          <h1 className='h1'>Food street Food</h1>
          <p className='p1'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
          <div className='bttn d-flex'>
          <button className='btn1'><span>ORDER NOW</span></button>
          <button className='btn2'><span>OUR MENU</span></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider1'>
        <div className='banner'>
          <img className="d-block w-100" src={require('./image/banner2.jpg')}></img>
        </div>

        <Carousel.Caption className='slider_title'>
          <h1 className='h1'>Best Quality</h1>
          <h1 className='h1'>Product Taste Food</h1>
          <p className='p1'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
          <div className='bttn d-flex'>
          <button className='btn1'><span>ORDER NOW</span></button>
          <button className='btn2'><span>OUR MENU</span></button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </>
    );
  }
  
  export default Slider;
  