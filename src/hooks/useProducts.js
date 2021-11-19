import  { useEffect } from 'react'
import { useState } from 'react'

const useProducts  = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://sheltered-crag-05668.herokuapp.com/shop")
        .then((res) =>res.json())
        .then((data) =>{
             setProducts(data)
            })
    },[])

    // return [products,setProducts]
    return [products,setProducts]
}

export default useProducts 
