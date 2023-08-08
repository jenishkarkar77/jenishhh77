import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSms } from "react-icons/fa";

function Feature() {
    return (
     
      <>
        <Row>
            <Col sm={12} md={12} lg={12}>
              <h2 className='menu'>Feature</h2>
              <h1 className='ooo'>We Provide Service</h1>
            </Col>
        </Row>

        <div className='container'>
        <Row>
            <Col sm={12} md={4} lg={4}>
                <div className='box1'>
                    <div className='box1-icon'>
                        <a className='fas'><FaSms></FaSms></a>
                    </div>
                    <div className='box1-text'>
                        <h3 className='h33'>Delivery Available</h3>
                        <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.</p>
                    </div>
                </div>
                <div className='box1'>
                    <div className='box1-icon'>
                        <a className='fas'><FaSms></FaSms></a>
                    </div>
                    <div className='box1-text'>
                        <h3 className='h33'>Delivery Available</h3>
                        <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.</p>
                    </div>
                </div>
            </Col>
            <Col sm={12} md={4} lg={4}>
                <div>
                    <img className='bike-img' src={require('./image/9.png')}></img>
                </div>
            </Col>
           
            <Col sm={12} md={4} lg={4}>
                <div className='box1'>
                    <div className='box1-icon'>
                        <a className='fas'><FaSms></FaSms></a>
                    </div>
                    <div className='box1-text'>
                        <h3 className='h33'>Delivery Available</h3>
                        <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.</p>
                    </div>
                </div>
                <div className='box1'>
                    <div className='box1-icon'>
                        <a className='fas'><FaSms></FaSms></a>
                    </div>
                    <div className='box1-text'>
                        <h3 className='h33'>Delivery Available</h3>
                        <p>Lorem ipsum dolor sit amet elit sed eiusmod tempor consectetur.</p>
                    </div>
                </div>
            </Col>
        </Row>
        </div>

        {/* --------booking now------- */}

        <div className='bgimg_book'>
            <div className='container spacer'>
                <div className='book_title text-center'>
                    <h2 className='text-white'>Lorem ipsum dolor sit amet, consecte adipisc elit.</h2>
                    <button className='btn3'><span className='text-center'>Booking Now</span></button>
                </div>
            </div>
        </div>  
        
        
      </>
    );
  }
  
  export default Feature;
  