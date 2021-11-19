import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "../Feature/Feature.css"

const Feature = () => {
    return (
        <div className="feature-bg">
        <Container>
            <Row >
                <Col md={3} >
                    <div className="text-center card-box mb-2">
                        <img src="https://i.ibb.co/QNVK7PG/1220641.png" style={{width:"50px",height:"50px"}} alt="" />
                        <h3>DealerShip Points</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit sed. Voluptatibus?</p>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="text-center card-box mb-2">
                        <img src="https://i.ibb.co/QNVK7PG/1220641.png" style={{width:"50px",height:"50px"}} alt="" />
                        <h3>DealerShip Points</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit sed. Voluptatibus?</p>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="text-center card-box mb-2">
                        <img src="https://i.ibb.co/QNVK7PG/1220641.png" style={{width:"50px",height:"50px"}} alt="" />
                        <h3>DealerShip Points</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit sed. Voluptatibus?</p>
                    </div>
                </Col>
                <Col md={3} >
                    <div className="text-center card-box mb-2">
                        <img src="https://i.ibb.co/QNVK7PG/1220641.png" style={{width:"50px",height:"50px"}} alt="" />
                        <h3>DealerShip Points</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, odit sed. Voluptatibus?</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    </div>
    )
}

export default Feature
