import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../redux/userSlice';
import { useHistory } from 'react-router';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button,Row, Form } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";


function Navbar() {
    const history = useHistory()
    const dispatch =useDispatch()

  function logOut() {
    dispatch(
        logout()
    )
      history.push('/');
}
const user = useSelector(selectUser);

    return (
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" style={{minHeight:'7%'}}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><h1><b><i>Questions</i></b><em></em></h1></NavLink>
                </div>
            </nav>
            {user?user.email:null}
            <Button variant="outline-danger" onClick={()=>{logOut()}}>Logout</Button>
            </Navbar>
    );
  }
  
  export default Navbar;
