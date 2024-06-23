import {Container, Row, Col} from 'react-bootstrap';
import {testimonial} from '../data/index';

import FaqComponent from '../components/FaqComponent';

const TestimonalPage = () => {
  return (
    <div className='testimonial-page'>
    <div className='testimonial'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'  data-aos="fade-up" data-aos-duration="1000" >Testimonial</h1>
            <p className='text-center' data-aos="fade-up" data-aos-duration="1000" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Col>
        </Row>
        <Row className='row-cols-lg-3 row-cols-1'>
        {testimonial.map((data) => {
        return (
        <Col key={data.id} className='mb-5'>
          <p className='desc shadow-sm'>{data.desc}</p>
          <div className='people'>
            <img src={data.image} alt=''/>
            <div>
              <h5 className='mb-1'>{data.name}</h5>
              <p className='m-0 fw-bold'>{data.skill}</p>
            </div>
          </div>
        </Col>
        )
      })}
        </Row>
      </Container>
    </div>

    <FaqComponent />
    </div>
  )
}

export default TestimonalPage
