import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Serviceing = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                            <div className="text-center py-5">
                                <p>OUR SERVICE CARS </p>
                                <h1>Exclusive Car Featured</h1>
                            </div>
                    </Col>
                </Row>
                <Row className="pd-5">
                    <Col>
                        <div style={{textAlign:"right"}}>
                            <img src="https://i.ibb.co/sPgFq7W/1205303.png" className="w-25 h-50" alt="" />
                            <h3>Super Fast CAR</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quo.</p>
                        </div>
                        <div style={{textAlign:"right"}}>
                            <img src="https://i.ibb.co/sPgFq7W/1205303.png"  className="w-25 h-50" alt="" />
                            <h3>Super Fast CAR</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quo.</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://i.ibb.co/94mpf9c/white-convertible-car-isolated-white-vector-53876-66815.jpg" alt="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img src="https://i.ibb.co/sPgFq7W/1205303.png"  className="w-25 h-50" alt="" />
                            <h3>Super Fast CAR</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quo.</p>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/sPgFq7W/1205303.png"  className="w-25 h-50" alt="" />
                            <h3>Super Fast CAR</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quo.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Serviceing
