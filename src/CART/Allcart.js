/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Header from '../HOME/Header'
import Contactus from '../HOME/Contactus'
import { CartProvider,useCart } from 'react-use-cart';
import {Col, Container, Row ,Button } from 'react-bootstrap'

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,totalItems,emptyCart,
    } = useCart();

    if (isEmpty) return <h1 className="text-center box ">Your cart is empty</h1>;

    return (
        <>
        <h1 className="text-center box " >Cart {totalUniqueItems}</h1>
        <br></br>
        <Container>
            <Row>
                <Col md="9" className="m-auto">
                <table className="table  table-striped  text-center bt-0 ">
            <thead className="tablehead" >
                <tr>
                    {/* <th>ID</th> */}
                <th>Prodect</th>
                <th>title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>OPERATION</th>
                </tr>
            </thead>
            
        <tbody className="table" >
            {items.map((item) => (
            <tr key={item.id}>
            {/* <td>{item.id}</td> */}
            <td><img src={item.image} style={{height:'80px',width:"100px"}}/></td>
            <td>{item.title}</td>
            <td>{item.quantity}</td>
            <td>{item.price.value * item.quantity}</td>
                <td>
                <Button className="w-25 m-2 " variant="info"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                decreese
                </Button>
                <Button className="w-25 m-2" variant="outline-warning"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                increse
                </Button>
                <Button className="w-25 m-2" variant="outline-danger"  
                 onClick={() => removeItem(item.id)}>delet</Button>
                </td>
            </tr>
           
            ))}
             </tbody>
        </table>
                </Col>
            </Row>
            <div className='d-flex'>
            <h1 className="ml-2 text-center box">
                 Your Total Quantite:{totalItems} <br/>
            {/* And Your Total Price:{cartTotal}  */}
            </h1>
            <button className='btn btn-danger m-4'
            onClick={()=>emptyCart()}>DELET ALL</button>
           
            </div>
            
          
        </Container>
        
        </>
    );
    }
function Allcart() {
  return (
    <div>
        <CartProvider>
        <Header/>
        <br/>
        <div className=" mt-5 p-5">   
{/* <h1 className="ml-2 text-center box"> MY Products  From Site</h1> */}
</div>
        <Cart />

        <Contactus/>
        </CartProvider>
    </div>
  )
}

export default Allcart