import { ADD_TO_CART } from "../ActionTypes";
import Axios from 'axios'

export const Addtocart = (data) => async (dispatch) =>{

    let addtocartProduct=  await Axios.post("http://localhost:3000/cartData",data);

    dispatch({
        type : ADD_TO_CART,
        payload : addtocartProduct
        
    })
}