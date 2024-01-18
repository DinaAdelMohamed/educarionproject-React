/* eslint-disable jsx-a11y/img-redundant-alt */
import axios from 'axios'
import React, { Component } from 'react'
import Header from '../HOME/Header'
import {Card , Col, Container, Row } from 'react-bootstrap'
import { CartProvider } from 'react-use-cart'


export class Allfeatch extends Component {
    state={
        person:[

        ]
    }
    componentDidMount(){
        axios.get('assets/js/Api.json')
        .then((item)=>{
            this.setState(
                {
                    person:item.data
                }

            )
        })
    }
  render() {
    return (
      <CartProvider>
<Header/>
<br/>
<div className=" mt-5 pt-3"></div>
<div>
    <Container className='container mt-3 p-3'>
    <Row className='row'>
    {this.state.person.map((prodect)=>(
<Col className='col-lg-4 mb-4'>
<Card class="card" style={{width: '18rem', height: '450px'}}>
  <img class="card-img-top p-2 "style={{height: '250px',borderRadius:'20px'}} src={prodect.image} alt="Card image cap"/>
  <div class="card-body">
  <h2 class="card-text">{prodect.title}</h2>
  <p class="card-text" >{prodect.author}</p>
  <h2 class="card-text" style={{color: 'blue'}}> ${prodect.price.value}
  {/* <Button className=" mx-2 pt-3" variant="primary">Add to cart</Button> */}

 </h2>

  </div>
</Card>






</Col>

)
)}

    </Row>
    </Container>
</div>


      </CartProvider>
    )
  }
}

export default Allfeatch