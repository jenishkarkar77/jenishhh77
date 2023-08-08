import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";

function Card1() {
    return (
     
      <>
        <div className='container spacer'>

          <Row>
            <Col sm={12} md={12} lg={12}>
              <h2 className='menu'>Menu</h2>
              <h1 className='ooo'>Our Hot & Fresh Food</h1>
            </Col>
          </Row>

          <Row className='g-4'>
            <Col sm={12} md={6} lg={3}>
            <Card className='card' style={{ width: '18rem',padding: '20px 45px', border: 'none',boxShadow: '1px 5px 30px 0px #e5e2e2'}}>
              <Card.Img variant="top" className='imgg' src={require('./image/4.png')} width={"80%"} />
                <Card.Body>
                  <Card.Title className='hh1'>Chicken Pizza</Card.Title>
                    <Card.Text className='pp1'>Lorem ipsum dolor sit amet adipiscing elit sed eiusm.</Card.Text>
                    <h2 className='hh2'>$10-$20</h2>
                    <div className='star'>
                    <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>
                    </div>
                    <button className='bag_btn'><a><BsFillHandbagFill></BsFillHandbagFill></a></button>
                  
                </Card.Body>
            </Card>    
            </Col>
            <Col sm={12} md={6} lg={3}>
            <Card style={{ width: '18rem',padding: '20px 45px', border: 'none',boxShadow: '1px 5px 30px 0px #e5e2e2'}}>
              <Card.Img variant="top" className='imgg' src={require('./image/6.png')} width={"80%"} />
                <Card.Body>
                  <Card.Title className='hh1'>Special Pizza</Card.Title>
                    <Card.Text className='pp1'>Lorem ipsum dolor sit amet adipiscing elit sed eiusm.</Card.Text>
                    <h2 className='hh2'>$10-$20</h2>
                    <div className='star'>
                    <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>
                    </div>
                    <button className='bag_btn'><a><BsFillHandbagFill></BsFillHandbagFill></a></button>
                  
                </Card.Body>
            </Card>    
            </Col>
            <Col sm={12} md={6} lg={3}>
            <Card style={{ width: '18rem',padding: '20px 45px', border: 'none',boxShadow: '1px 5px 30px 0px #e5e2e2'}}>
              <Card.Img variant="top" className='imgg' src={require('./image/7.png')} width={"80%"} />
                <Card.Body>
                  <Card.Title className='hh1'>Paproni Pizza</Card.Title>
                    <Card.Text className='pp1'>Lorem ipsum dolor sit amet adipiscing elit sed eiusm.</Card.Text>
                    <h2 className='hh2'>$10-$20</h2>
                    <div className='star'>
                    <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>
                    </div>
                    <button className='bag_btn'><a><BsFillHandbagFill></BsFillHandbagFill></a></button>
                  
                </Card.Body>
            </Card>    
            </Col>
            <Col sm={12} md={6} lg={3}>
            <Card style={{ width: '18rem',padding: '20px 45px', border: 'none',boxShadow: '1px 5px 30px 0px #e5e2e2'}}>
              <Card.Img variant="top" className='imgg' src={require('./image/4.png')} width={"80%"} />
                <Card.Body>
                  <Card.Title className='hh1'>All Chees Pizza</Card.Title>
                    <Card.Text className='pp1'>Lorem ipsum dolor sit amet adipiscing elit sed eiusm.</Card.Text>
                    <h2 className='hh2'>$10-$20</h2>
                    <div className='star'>
                    <AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar>
                    </div>
                    <button className='bag_btn'><a><BsFillHandbagFill></BsFillHandbagFill></a></button>
                  
                </Card.Body>
            </Card>    
            </Col>
            
          </Row>
        </div>
        


        

        
      </>
    );
  }
  
  export default Card1;
  