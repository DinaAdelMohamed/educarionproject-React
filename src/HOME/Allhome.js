import React from 'react'
import Header from './Header'
import Baner from './Baner'
import Service from './Service'
import Courses from './Courses'
import Testimonlias from './Testimonlias'
import Contactus from './Contactus'
import { CartProvider } from 'react-use-cart'

function Allhome() {
  return (
    <CartProvider>
        <Header/>
        <Baner/>
        <Service/>
        <Courses/>
        <Testimonlias/>
        <Contactus/>
    </CartProvider>
  )
}

export default Allhome