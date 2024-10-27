import { INCREMENT,DECREMENT } from "../ActionTypes";


let count = JSON.parse(localStorage.getItem('counter'));

const initialValue = {
    counter: count?count:0
}


export const CounterReducers = (state=initialValue,action) =>{
        console.log(action)
        let count;
        switch(action.type){
            case INCREMENT:
                count = state.counter+1;
                localStorage.setItem('counter',JSON.stringify(count))
                return {...state, counter:count}
            case DECREMENT:
                count = state.counter-1;
                localStorage.setItem('counter',JSON.stringify(count))
                return { ...state, counter: count}
            default:
                return state;
        }
}