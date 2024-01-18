import React from 'react'
import Header from '../HOME/Header'
import Headingpage from './Headingpage'
import Team from './Team'
import Courses from '../HOME/Courses'
import Testimonlias from '../HOME/Testimonlias'
import Conctteam from './Conctteam'
import { CartProvider } from 'react-use-cart'

function Allabout() {
  return (
    <CartProvider>
        <Header/>
        <Headingpage/>
        <Team/>
        <Courses/>
        <Testimonlias/>
        <Conctteam/>
    </CartProvider>
  )
}

export default Allabout