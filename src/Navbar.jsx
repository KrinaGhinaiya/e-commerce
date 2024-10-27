import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserData, userLogout } from './Redux/Actions/UserActions';


function Header(){
   
    let userLogin = useSelector((state)=>state.UserReducers.logindetails);
    console.log(userLogin);

    let cartRecord = useSelector((state)=>state.CartReducers.cartRecord)
    console.log(cartRecord);


    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserData());
    },[])

    let logoutuser = () =>{
        dispatch(userLogout())
    }
    
    return(
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                     {userLogin.username?
                        userLogin.username
                        :
                        <NavLink to="/signUp"><Button>SignUp</Button></NavLink>
                     }

                    {userLogin.username?
                        <Button onClick={()=>logoutuser()}>Logout</Button>
                        :
                        <NavLink to="/signIn"><Button>SignIn</Button></NavLink>
                  }

                    <Button onClick={()=>logoutuser()}>Cart({cartRecord.length})</Button>
                     
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;