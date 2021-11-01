import React from 'react'
import { Redirect } from "react-router-dom";
// import NavigationBar from './NavigationBar';
import Dashbody from './Dashbody';
import "./Home.css";

function UserAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'USER') {
    return (
      <div className="font">
        <Dashbody />
      </div>
    )
  }
  else {
  return (<Redirect to="/userlogin" />)
  }
}

export default UserAfterLogin
