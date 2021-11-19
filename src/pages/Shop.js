import React, { useState } from 'react'
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Component/Product/Product';
import useContexts from '../hooks/useContexts';
import useProducts from '../hooks/useProducts';


const Shop = () => {
  // const products = [];
  // return (
  //   <div>
  //     {products.map((product) => (
  //       <Product key={product._id} product={product}></Product>
  //     ))}
  //   </div>
  // );
  // const [products,setProducts]= useState({})
  // const {products} = useContexts();
  const [products, setProducts]= useState([])
    useEffect(()=>{
      fetch('https://sheltered-crag-05668.herokuapp.com/shop')
      .then(res => res.json())
      .then(data => setProducts(data))
    })
  return(
      
          <div style={{ 
            backgroundImage: "linear-gradient(to right top, #0e3a90, #2b4da1, #4161b1, #5576c2, #6a8bd2, #6f91db, #7398e5, #789eee, #6f96f2, #678df6, #6284f9, #5f7afb)",
           backgroundSize: 'cover',
           minHeight: '100vh',
           width: '100%',
           backgroundPosition: 'center'
        }}
    className="overlybody"
    >
    <Container>
    <Row>
    <div className="text-center  text-white pt-5">
    <h1>Our All Cars</h1>
    <p >Best Cars is a Car process in which transport orders are grouped into tours and put into a certain order. The tour is usually performed by one person or one vehicle. The tour planning is important in the areas where there are many tours and orders.</p>
    </div>
    </Row>
    </Container>
    
    <Container>
      <Row className="py-2">
      {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
    </Row>  
    </Container>
    </div>
        )
    // const products = [];
//     const [products, setProducts]= useState([])
//     useEffect(()=>{
//       fetch('https://sheltered-crag-05668.herokuapp.com/shop')
//       .then(res => res.json())
//       .then(data => setProducts(data))
//     })
//     return(
      
//       <div style={{ 
//         backgroundImage: "linear-gradient(to right top, #0e3a90, #2b4da1, #4161b1, #5576c2, #6a8bd2, #6f91db, #7398e5, #789eee, #6f96f2, #678df6, #6284f9, #5f7afb)",
//        backgroundSize: 'cover',
//        minHeight: '100vh',
//        width: '100%',
//        backgroundPosition: 'center'
//     }}
// className="overlybody"
// >
// <Container>
// <Row>
// <div className="text-center  text-white pt-5">
// <h1>Our All Cars</h1>
// <p >Best Cars is a Car process in which transport orders are grouped into tours and put into a certain order. The tour is usually performed by one person or one vehicle. The tour planning is important in the areas where there are many tours and orders.</p>
// </div>
// </Row>
// </Container>

// <Container>
//   <Row className="py-2">
//   {products.map((product) => (
//         <Product key={product._id} product={product}></Product>
//       ))}
// </Row>  
// </Container>
// </div>
//     )

}

export default Shop
