import {Container, Row, Col} from 'react-bootstrap'
import {semuaKelas} from '../data/index';

import FaqComponent from '../components/FaqComponent';


const KelasPage = () => {
  return (
    <div className='kelas-page'>
    <div className='kelas min-vh-100'>
    <Container>
      <Row>
        <Col>
          <h1 className='fw-bold text-center' data-aos="fade-up" data-aos-duration="1000" >Info Kelas</h1>
          <p className='text-center' data-aos="fade-up" data-aos-duration="1000" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
        </Col>
      </Row>
      <Row>
      {semuaKelas.map((kelas)=> {
         
         return (
         <Col key={kelas.id} className='shadow rounded'>
           <img src={kelas.image} alt='unsplash.com' className='w-100'/>
           <div className='star mb-2 px-3'>
             <i className={kelas.star1}></i>
             <i className={kelas.star2}></i>
             <i className={kelas.star3}></i>
             <i className={kelas.star4}></i>
             <i className={kelas.star5}></i>
           </div>
           <h5 className='mb-5 px-3'>{kelas.title}</h5>
           <div className='ket d-flex justify-content-between align-items-centerb px-3 pb-3'>
             <p className='m-0 text-dark fw-bold'>{kelas.price}</p>
             <button className='btn btn-dark rounded-1'>{kelas.buy}</button>
           </div>
         </Col>
         );
         })}  
      </Row>
    </Container>
    </div>

    <FaqComponent/>
    </div>
  )
}

export default KelasPage
