import { INCREMENT,DECREMENT } from "../ActionTypes";


export const incrementActions = () =>{
    
    return {
        type : INCREMENT
    }
}

export const decrementActions = () =>{
    return{
        type : DECREMENT
    }
}