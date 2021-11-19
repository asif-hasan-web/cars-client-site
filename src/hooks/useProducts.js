import  { useEffect } from 'react'
import { useState } from 'react'

const useProducts  = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/shop")
        .then((res) =>res.json())
        .then((data) =>{
             setProducts(data)
            })
    },[])

    // return [products,setProducts]
    return [products,setProducts]
}

export default useProducts 
