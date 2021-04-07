import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <Container>
        <Row className='container-fluid text-left py-3 ml-sm-5 '>
          <Col className='py-3 col-md-4 col-sm-12 col-auto'>
            <Row className='py-2'><Image responsive src="/Logo-care.png" alt="logo" width="150px" height="35px"/></Row>
            <Row className='fas fa-map-signs text-muted p-2'>&nbsp;789 Ton Duc Thang, Da Nang</Row>
            <Row className='fas fa-phone-alt text-muted p-2'>&nbsp;0789.888.999</Row>
            <Row className='far fa-envelope text-muted p-2'>&nbsp;Petcare.shop@gmail.com</Row>
            <Row className='fab fa-weebly text-muted p-2'>&nbsp;www.petcare.com</Row>

          </Col>
          <Col className='col-md-4 col-sm-12 col-auto'>
            <Row>&nbsp;</Row>
            <Row className='pt-3'> <h4 className="text-light">SOCIAL NETWORK</h4></Row>
            <Row>
              <Col className='p-1 col-sm-1 col-md-2'><a href='https://www.fb.com/' target='_blank' rel='noreferrer noopener' ><Image responsive src="/fb.png" alt="logo" width="35px" height="35px" /></a></Col>
              <Col className='p-1 col-sm-1 col-md-2'><a href='https://www.instagram.com/' target='_blank'><Image responsive src="/ins.png" alt="logo" width="35px" height="35px" /></a></Col>
              <Col className='p-1 col-sm-1 col-md-2'><a href='https://www.youtube.com/' target='_blank'><Image responsive src="/yt.png" alt="logo" width="35px" height="35px" /></a></Col>
              <Col className='p-1 col-sm-1 col-md-2'><a href='https://www.twitter.com/' target='_blank'><Image responsive src="/tw.png" alt="logo" width="35" height="35px" /></a></Col>
            </Row>
          </Col>
          <Col className='col-md-4 col-sm-12 col-auto'>
            <Row>&nbsp;</Row>
            <Row className='pt-3'> <h4 className="text-light">Openning hours</h4></Row>
            <Row className='pt-1 pb-1 text-muted'> MON-FRI: 8.00am – 6.00pm</Row>
            <Row className='pt-1 pb-1 text-muted'> SAT-SUN: 8.30am – 11.00pm</Row>
          </Col>
        </Row>
        <Col><hr /></Col>
        <Col className='text-center pb-3'> Pet Care @2021</Col>
      </Container>
    </footer>
  )
}

export default Footer
