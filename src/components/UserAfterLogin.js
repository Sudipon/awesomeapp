import React from 'react'
import { Redirect } from "react-router-dom";
// import NavigationBar from './NavigationBar';
import Dashbody from './Dashbody';
import "./Home.css";

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/userlogin" />)
  }
  else {
    return (
      <div className="font">
        <Dashbody />
      </div>
    )
  }
}

export default UserAfterLogin
