import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import useProducts from '../../hooks/useProducts';
import '../HeroArea/HeroArea.css'
import Product from '../Product/Product';

const HeroArea = () => {
    const products = useProducts();
    return (
       
        <div className="banner-area">
            <Container className="h-100">
                <Row  className="align-items-center h-100">
                    <Col sm={12} md={{ span: 6, offset: 3 }} className="text-white align-items-center">
                        <h1>THE ALL NEW COROLLA ALTIS <br /> IS NOW AVAILABLE!</h1>
                        <p>Reinvent adventure with an all new hybrid experience. The Toyota Corolla ATLIS brings a whole new meaning to the world of sedans.</p>
                        <button className="btn btn-outline-danger">Explore Now</button>
                    </Col>
                </Row>
            </Container>
            
        </div>
        
    )
}

export default HeroArea
