import { useDispatch, useSelector } from "react-redux"
import { deleteContactDetails } from "../Redux/Actions/ContactActions";
import { Link } from "react-router-dom";

function ViewContact(){
    let details = useSelector((state)=>state.conRoot.contact);
    console.log(details);
    let dispatch = useDispatch();

    let deleteContact = (pos) =>{
        console.log(pos)
        dispatch(deleteContactDetails(pos))
    }

    return(
        <>
            <div style={{textAlign:"center"}}>
                <h1>Contact List</h1>
                <table border={1} align="center">
                    <tr>
                        <td>Name</td>
                        <td>Contact</td>
                        <td>Actions</td>
                    </tr>

                    {details.map((v,i)=>{
                        return (
                            <tr>
                                <td>{v.name}</td>
                                <td>{v.phone}</td>
                                <td><button onClick={()=>deleteContact(i)}>Delete</button>
                                ||
                               <Link to={"/updateContact/"+i}>update</Link></td>
                              
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}

export default ViewContact