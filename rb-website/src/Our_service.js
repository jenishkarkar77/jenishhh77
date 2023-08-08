import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPizzaSlice,FaHamburger,FaIceCream } from "react-icons/fa";

function Our_service() {
    return (
     
      <>
      {/* -------our service------- */}
    <div className='container'>
      <Row className='spacer g-4'>
        <Col sm={12} md={6} lg={4}>
            <div className='our_box'>
                <div className='our_para d-flex'>
                    <div className='our_para_contact'>
                        <FaPizzaSlice className='our_para_icon'></FaPizzaSlice> 
                    </div>
                    <div className='our_para_tx'>
                        <a>Special Pizza</a>
                        <p>Lorem ipsum dolor sit amet elit consectetur dolor sit food.</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <div className='our_box'>
            <div className='our_para d-flex'>
                    <div className='our_para_contact'>
                        <FaHamburger className='our_para_icon'></FaHamburger> 
                    </div>
                    <div className='our_para_tx'>
                        <a>Special Food</a>
                        <p>Lorem ipsum dolor sit amet elit consectetur dolor sit food.</p>
                    </div>
                </div>
            </div>
        </Col>
        <Col sm={12} md={6} lg={4}>
            <div className='our_box'>
            <div className='our_para d-flex'>
                    <div className='our_para_contact'>
                        <FaIceCream className='our_para_icon'></FaIceCream> 
                    </div>
                    <div className='our_para_tx'>
                        <a>All Special Food</a>
                        <p>Lorem ipsum dolor sit amet elit consectetur dolor sit food.</p>
                    </div>
                </div>
            </div>
        </Col>

      </Row>
    </div>
      
        
      </>
    );
  }
  
  export default Our_service;
  