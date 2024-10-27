import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactDetails } from "../Redux/Actions/ContactActions";
import { Link } from "react-router-dom";



function Contact(){
    let [contact,SetContact] = useState({});
    let dispatch = useDispatch();
    // let details = useSelector((state)=>state.conRoot.contact);
    // console.log(details);

    let changeInput = (e) =>{
        let {name,value} = e.target;
        SetContact({...contact,[name]:value})
    }

    let submitData = (e) =>{
        e.preventDefault();
        dispatch(addContactDetails(contact))
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <Link to="/viewContact">View Contact</Link>
                <h1>Add Contact</h1>
                <form method="post" onSubmit={(e) =>submitData(e)}>
                    <table border={1} align="center">
                        <tr>
                            <td>Enter Name</td>
                            <td><input type="text" name="name" onChange={(e)=>changeInput(e)}/></td>
                        </tr>

                        <tr>
                            <td>Enter Phone</td>
                            <td><input type="text" name="phone" onChange={(e)=>changeInput(e)}/></td>
                        </tr>

                        <tr>
                            <td></td>
                            <td><input type="submit" name="submit" value="Add Contact" /></td>
                        </tr>
                    </table>
                </form>
            </div>

        </>
    )
}

export default Contact;