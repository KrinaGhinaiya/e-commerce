import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCartData } from './Redux/Actions/CartAction';
import Axios from 'axios'
function Cart(){

    let [cartProductIds, setCartProductIds] = useState([]);
    useEffect( ()=>{
        setTimeout(()=>{
              getUserCartData();
        },1000)
    },[])

    let getUserCartData = async () =>{
        let userLocal = JSON.parse(localStorage.getItem('user'));

        let cartData = await Axios.get("http://localhost:3000/cartData?userId="+userLocal.id);
        console.log(cartData.data);
        var newArray =[];
        cartData.data.map((v,i)=>{
            newArray.push(v.productId);
        })
        console.log(newArray)
        setCartProductIds(newArray);
    }

    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <h3 style={{textAlign:"center",marginTop:"50px"}}>Cart Data</h3>
                   
                    <Col md="auto">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            
                            </tbody>

                            <tr>
                                    <td colSpan={5}>Total</td>
                                    <td colSpan={2}>500</td>
                                    
                                </tr>
                        </Table>
                    </Col>
                   
                </Row>
                
            </Container>
        </>
    )
}

export default Cart;