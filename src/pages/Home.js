import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Feature from '../Component/Feature/Feature'
import Footer from '../Component/Footer/Footer'
import HeroArea from '../Component/HeroArea/HeroArea'
import HeroShop from '../Component/HeroShop/HeroShop'
import Product from '../Component/Product/Product'
import Serviceing from '../Component/Serviceing/Serviceing'
import useContexts from '../hooks/useContexts'
import useProducts from '../hooks/useProducts'
import Shop from './Shop'

const Home = () => {
    // const products = useProducts();
    return (
        <>
        <HeroArea></HeroArea>
        <HeroShop></HeroShop>
        <Feature></Feature>
        <Serviceing></Serviceing>
        <Footer></Footer>
        </>

    )
}

export default Home
