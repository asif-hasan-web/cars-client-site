






// import React from 'react'

// import  { useState } from 'react'
// import { useEffect } from 'react'
// import { Table } from 'react-bootstrap'

// const MyOrder = () => {
//     const [products,setProducts] =useState([])

   

//     useEffect(()=>{
//         fetch("http:/localhost:5000/myorder")
//         .then((res) => res.json())
//         .then((result)=>setProducts(result))
//     },[])


//      //DElete an plan
//      const handleDelete = (id) =>{
//         const url = `http:/localhost:5000/delete/${id}`;
//         fetch(url, {
//             method:'DELETE'
//         })
//         .then(res =>res.json())
//         .then(data =>{
//             if(data.deletedCount> 0){
//                 alert('deleted sucessfully');
//                 const remainingProducts = products.filter(product=> product._id !== id)
//                 setProducts(remainingProducts)
//             }
//         })
//     }

//     // console.log(Products);
//     return (
//         <div>
//       <h1 className="text-center py-5">MY all Products : {products?.length}</h1>
//       <Table striped bordered hover   >
//         <tbody>
//           <tr>
//             <th>#</th>
//             <th>Package Name</th>
//             <th>Total Cost</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>0
//         </tbody>
//         {products?.map((pd) => (
//           <tbody>
//             <tr >
//               <td>{pd?.name}</td>
//               <td>{pd?.email}</td>
//               <td>{pd?.price}</td>
//               <td className=" text-primary " >Pending</td>
//               <td><button onClick={()=> handleDelete (pd._id)}className="btn bg-danger">Delete</button></td>
//             </tr>
//           </tbody>
//         ))}
//       </Table>
//     </div>
    
    
//     )
// }

// export default MyOrder
