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
        <h1>WELCOME ADMIN</h1>
        <h2>THIS IS ADMIN DASH BOARD</h2>
        </center>
      </div>
    )
  }
}

export default AdminAfterLogin
