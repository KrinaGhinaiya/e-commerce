import { ADD_CONTACT,DELETE_CONTACT, UPDATE_CONTACT } from "../ActionTypes";


export const addContactDetails = (data) =>{
    return {
        type : ADD_CONTACT,
        payload: data

    }
}


export const deleteContactDetails = (pos) =>{
    return {
        type : DELETE_CONTACT,
        payload : pos
    }
}

export const updateContact = (pos,data) =>{
    return {
        type : UPDATE_CONTACT,
        payload : {
            pos,data
        }
    }
}