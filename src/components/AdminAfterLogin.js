import React from 'react'
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
// import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import "./Home.css";

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div className="font"><center>
        <NavigationBar />
        <br />
        <h3>WELCOME ADMIN</h3>
        <h3>THIS IS ADMIN DASH BOARD</h3>
        </center>
      </div>
    )
  }
}

export default AdminAfterLogin
