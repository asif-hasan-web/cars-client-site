// import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Card, Col,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    // const [products, setProducts] = useState([])
    // useEffect(()=>{
    //     fetch("http:/localhost:5000/shop")
    //     .then((res) => res.json())
    //     .then((data)=>setProducts(data))
    // },[])
    const{_id,name,img,about,price}= product;

    return (
        

        <Col className="my-2">
           
           <Card className="m-2 mt-2 h-100"  style={{ width: '20rem',height: "400px" }}>
                <Card.Img variant="top" style={{  height: "225px" }} className="img-fluid text-dark" src={img}  />
                    <Card.Body className="text-dark text-center">


                        <Card.Title  className="text-uppercase" >{name}</Card.Title>
                        <Card.Title>Price:{price} TK</Card.Title>
                        <br />
                        <Card.Text>{about}</Card.Text>


                    </Card.Body>
                    
                        
                        <Card.Footer  className="text-center">
                            <Link to={`/placeorder/${_id}`}>
                                    <Button variant="primary" className="text-white text-center mx-auto" style={{
                                        bottom: '0',
                                        marginBottom:'10px'
                                    }}
                                    >Order now</Button>
                                </Link>
                        </Card.Footer>
                </Card>
     </Col>

    )
}

export default Product
