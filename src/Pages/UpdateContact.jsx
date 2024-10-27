import { useDispatch, useSelector } from "react-redux"
import { deleteContactDetails, updateContact } from "../Redux/Actions/ContactActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateContact(){
    let details = useSelector((state)=>state.conRoot.contact);
    let list = useParams();
    let [singleContact, setSingleContact]= useState({});
    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    useEffect(()=>{
        setTimeout(()=>{
            fetchContact();
        },1000)
    },setSingleContact)
    
    let fetchContact = () =>{
        console.log(details);
        console.log(list.pos)
        let contactDetails = details.filter((v,i)=>{
            if(i==list.pos){
                return v;
            }
        })
        setSingleContact(contactDetails[0]);
    }

    let changeInput = (e) =>{
        let {name,value} = e.target;
        setSingleContact({...singleContact,[name]:value})
    }

    let submitData = (e) =>{
        e.preventDefault();
        console.log(singleContact);
        dispatch(updateContact(list.pos,singleContact))
        navigate("/viewContact")
        
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Edit Contact</h1>
                <form method="post" onSubmit={(e) =>submitData(e)}>
                    <table border="1" align="center">
                        <tr>
                            <td>Enter Name</td>
                            <td><input type="text" value={singleContact.name?singleContact.name:""} name="name" onChange={(e)=>changeInput(e)}/></td>
                        </tr>

                        <tr>
                            <td>Enter Phone</td>
                            <td><input type="text" value={singleContact.phone?singleContact.phone:""} name="phone" onChange={(e)=>changeInput(e)}/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><input type="submit" value="Edit" name="edit"/></td>
                        </tr>
                    </table>
                </form>

                
               
            </div>
        </>
    )
}

export default UpdateContact