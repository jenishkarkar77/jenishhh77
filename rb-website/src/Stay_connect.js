import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Stay_connect() {
    return (
     
      <>
       
       <div className='container'>
            <Row className='spacer mt-5'>
                <Col sm={12} md={12} lg={6}>
                    <h2>Stay Connected With Us</h2>
                    
                    <Form>
                        <div className='form1 d-flex'>
                            <input type={Text} name='name' id="name" className='form-control' placeholder='Your Name' required='required'></input>
                            <input type={'email'} name='email' id="form_email" className='form-control' placeholder='Your Email*' required='required'></input>
                        </div>
                        <div className=' form1'>
                            <input type={Text} name='name' id="name" className='form-control' placeholder='Your Subject*' required='required'></input>
                        </div>
                        <div className=' form1'>
                            <textarea type={'Message'} name='message' id="message" className='form-control' placeholder='Your Message' required='required'></textarea>
                        </div>
                        <div className=' form1'>
                            <button className='btn4' type='submit' value='submit Now' name='submit' id='submitButton'>Send Message</button>
                        </div>
                    </Form>  
                </Col>
                <Col sm={12} md={12} lg={6}>
                    <div className='map'>
                    <iframe src="https://www.google.com/maps/d/embed?mid=1uvkm-eimyrbjdmmBF_uXsKhMyBY&hl=en_US&ehbc=2E312F" width="640" height="480"></iframe>
                    </div>
                </Col>
            </Row>
        </div>
      </>
    );
  }
  
  export default Stay_connect;
  