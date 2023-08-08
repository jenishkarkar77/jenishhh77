import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPizzaSlice,FaHamburger,FaIceCream } from "react-icons/fa";

function About_us() {
    return (
     
      <>
      <div className='bg-clr'>
      <div className="container spacer">
        <Row>
            <Col sm={12} md={12} lg={7}>
                <div className='about_us'>
                    <h3>About_us</h3>
                    <h2>Welcome To Our Piza Hut And Fresh Food In Any Location For You.</h2>
                    <p>Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit dolor sit amet elit.Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit sit amet elit.Lorem ipsum dolor sit amet elit , consectetur adipiscing , sed eiusmod tempor sit amet elit.</p>
                    <Row>
                    <Col sm={12} md={6} lg={4}>
            <div className='our_box1'>
                <div className='our_para1'>
                    <div className='our_para_contact1'>
                        <FaPizzaSlice className='our_para_icon1'></FaPizzaSlice> 
                    </div>
                    <div className='our_para_tx1'>
                        <a>Professional Food Rate</a>
                    </div>
                </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <div className='our_box1'>
            <div className='our_para1'>
                    <div className='our_para_contact1'>
                        <FaHamburger className='our_para_icon1'></FaHamburger> 
                    </div>
                    <div className='our_para_tx1'>
                        <a>Best Quilty Food</a>
                    </div>
                </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <div className='our_box1'>
            <div className='our_para1'>
                    <div className='our_para_contact1'>
                        <FaIceCream className='our_para_icon1'></FaIceCream> 
                    </div>
                    <div className='our_para_tx1'>
                        <a>Online Support 24/7</a>
                    </div>
                </div>
            </div>
        </Col>
                    </Row>


                </div>

            </Col>
            <Col sm={12} md={12} lg={5}>
                <div className='about_us_img'>
                    <img src={require('./image/3.jpg')}></img>
                </div>
            </Col>
        </Row>
      </div>
    </div>
        
      </>
    );
  }
  
  export default About_us;
  