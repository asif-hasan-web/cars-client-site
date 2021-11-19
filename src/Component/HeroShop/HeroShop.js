import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import useContexts from '../../hooks/useContexts';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const HeroShop = () => {
    // const {products} = useContexts();
    // const {info}
    // const [products, setProducts]= useState([])
    const [products, setProducts]= useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/shop')
      .then(res => res.json())
      .then(data => setProducts(data))
    })
    return (
        <div style={{ 
            background: ' linear-gradient(315deg, #182b3a 0%, #20a4f3 74%)', 
            backgroundSize: 'cover',
            minHeight: '100vh',
            width: '100%',
            backgroundPosition: 'center' 
         }}
            className="overlybody"
            >
            <div className="py-5  text-white">
                <div className="text-center pt-5">
                        <p className="text-danger">EXPLORE GREAT COMPANY</p>
                        <h1 className="text-whtie">POPULAR  PACKAGES</h1>
                        <p className="mb-0">
                        Our Services To Give Best Care For Your Eyes.
                        </p>
                </div>
            </div>
            <Container>
                <div className="py-4 d-flex flex-wrap justify-content-between">
                    
                        {products.slice(0, 6)?.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                </div>
            </Container>

        </div>
    )
}
// 
export default HeroShop
