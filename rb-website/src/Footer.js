import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaAngleDoubleRight } from "react-icons/fa";

function Footer() {
    return (
     
      <>
      <div className='bg-fclr'>
        <div className='container'>
            <Row className='spacer'>
                <Col sm={12} md={6} lg={4}>
                    <div className='d-flex'>
                    <img src={require('./image/logo1.png')} width='40x'></img>
                    <h1 className='logo2'>GATHERER</h1>
                    </div>
                    <p className='p3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod Lorem ip consectetur sit amet .</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod.</p>
                </Col>
                <Col sm={12} md={6} lg={2}>
                    
                    <h2 className='f1-text'>Quick Links</h2>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Get Stared</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Our Team</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>About Us</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Need Help</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Contact Us</h3>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={2}>
                    
                    <h2 className='f1-text'>Support Links</h2>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Our Faq</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Our Service</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Portfolio</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Apps Download</h3>
                    </div>
                    <div className='d-flex r'>
                    <a><FaAngleDoubleRight></FaAngleDoubleRight></a>
                    <h3 className='f-text r'>Our News</h3>
                    </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <h2 className='f1-text'>Latest News</h2>
                    <p className='p3'>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod.</p>
                    <h6>15 June, 2021</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed eiusmod.</p>
                    <h6>15 June, 2021</h6>
                </Col>
                
            </Row>
        </div>
      </div>

        
      </>
    );
  }
  
  export default Footer;
  