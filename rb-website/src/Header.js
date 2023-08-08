import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImLocation } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaTwitter,FaFacebook,FaChrome,FaFacebookMessenger,FaGooglePlusG } from "react-icons/fa";

function Header() {
  
    return (
     
      <>
      <div className='bg-colour py-2'>
        <div className='container text-white'>
          <Row>
            <Col sm={12} md={12} lg={9}>
              <div className='header_123 d-flex m-1'>
                <div className='align-items-center top_info'>
                  <span className='fs-6'><ImLocation className='me-2'></ImLocation>Address : 27 san Francisco, CA.</span>
                </div>
                <div className='align-items-center top_info'>
                  <span className='fs-6'><IoIosCall className='me-2'></IoIosCall>Call us : +61 5001444-122</span>
                </div>
              </div>
            </Col>
            <Col lg={3}>
              <div className='top_social text-sm-end align-items-center d-none d-lg-block'>
                <a><FaFacebook></FaFacebook></a>
                <a><FaTwitter></FaTwitter></a>
                <a><FaChrome></FaChrome></a>
                <a><FaFacebookMessenger></FaFacebookMessenger></a>
                <a><FaGooglePlusG></FaGooglePlusG></a>

              </div>
            </Col>
          </Row>

        </div>

      </div>


      <div className='container'>
        <Navbar expand="md">
      
        <Navbar.Brand href="#"><img src={require('./image/logo1.png')} width='60px'></img></Navbar.Brand>
        <h1 className='logo'>GATHERER</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main_menu">
            <Nav.Link href="#home"><li className='active'><a>HOME</a></li></Nav.Link>
            <Nav.Link href="#link"><li><a>ABOUT</a></li></Nav.Link>
            <Nav.Link href="#link"><li><a>SERVICE</a></li></Nav.Link>
            <Nav.Link href="#link"><li><a>TEAM</a></li></Nav.Link>
            <Nav.Link href="#link"><li><a>HOUR</a></li></Nav.Link>
            <Nav.Link href="#link"><li><a>BLOG</a></li></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>

    

      </>
    );
  }
  
  export default Header;
  