import React from 'react'
import Header from '../HOME/Header'
import Contactus from '../HOME/Contactus'
import Concthead from './Concthead'
import { CartProvider } from 'react-use-cart'

function Allconct() {
  return (
    <CartProvider>
        <Header/>
        <Concthead/>
        <Contactus/>
    </CartProvider>
  )
}

export default Allconct