import { ADD_TO_CART } from "../ActionTypes";


const initialValue = {
    cartRecord : []
}


export const CartReducers = (state=initialValue,action) =>{
    console.log(action)
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state, cartRecord : [...state.cartRecord, action.payload]
            }
        default: 
            return state;
    }
}