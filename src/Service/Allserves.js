import React from 'react'
import Header from '../HOME/Header'
import Headserv from './Headserv'
import Courses from '../HOME/Courses'
import Conctteam from '../About/Conctteam'
import { CartProvider } from 'react-use-cart'

function Allserves() {
  return (
    <CartProvider>
        <Header/>
        <Headserv/>
        <Courses/>

        <Conctteam/>
    </CartProvider>
  )
}

export default Allserves