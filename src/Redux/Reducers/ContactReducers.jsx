import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "../ActionTypes";

let allContact = JSON.parse(localStorage.getItem('contactDetails'))

const initialValue = {
    contact : allContact?allContact:[]
}


export const ContactReducers = (state=initialValue,action) =>{
    console.log(action)
    switch(action.type){
        case ADD_CONTACT:
            let addCo =[...state.contact,action.payload];
            localStorage.setItem("contactDetails",JSON.stringify(addCo));
            return {
                ...state, contact:  addCo
            }
        case DELETE_CONTACT:
                let remainingData =  state.contact.filter((v,i)=>{if(i!=action.payload){return v}})
                localStorage.setItem("contactDetails",JSON.stringify(remainingData));
            return {
                ...state, contact : remainingData
            };
        case UPDATE_CONTACT : 
                state.contact.map((v,i)=>{
                    if(i==action.payload.pos){
                        state.contact[i]=action.payload.data
                    }
                })
                localStorage.setItem("contactDetails",JSON.stringify(state.contact));
                return {
                    ...state, contact : state.contact
                };
        default:
            return state;
    }
}