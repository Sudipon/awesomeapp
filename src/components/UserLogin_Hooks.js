import React, { useState } from 'react'
import axios from 'axios';
import { NavLink, useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import "./Home.css";
import facebook from '../components/static/facebook.svg';
import twitter from '../components/static/twitter.svg';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function UserLogin(props) {
  let history = useHistory();
  const [eemail, setEmpEmail] = useState("");
  const [epass, setEmpPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const emplogininfo = {
      empemail: eemail,
      emppass: epass
    }

    axios.post('https://question-backend.herokuapp.com/emp/logincheck', emplogininfo)
      .then(res => {
        console.log(res.data)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("userid", res.data[0]._id)
        sessionStorage.setItem("useremail", res.data[0].empemail)
        sessionStorage.setItem("username", res.data[0].empname)
        sessionStorage.setItem("usermobile", res.data[0].empmobile)
        sessionStorage.setItem("userdob", res.data[0].empdob)
        sessionStorage.setItem("userpass", res.data[0].emppass)
        sessionStorage.setItem("usergender", res.data[0].empgender)
        sessionStorage.setItem("usercountry", res.data[0].empcountry)
        sessionStorage.setItem("useraddress", res.data[0].empaddress)

        history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID UID OR PASSWORD')
      })

    setEmpEmail('')
    setEmpPass('')
  }

  return (
    <div className="font"><center>

      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ color: 'Blue', marginLeft: '1rem'}}><h1><b><i>Question</i></b></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" style={{ marginLeft: '2rem'}} >
            <Nav.Link as={Link} to="/about" style={{ color: 'Blue' }}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{ color: 'Blue' }}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/register" style={{ color: 'Blue' }}>Register</Nav.Link>
            <Nav.Link as={Link} to="/adminlogin" style={{ color: 'Blue' }}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="vh-10" >
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h3>Login</h3><br />
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-lg"
                   onChange={onChangeEmpEmail} value={eemail} placeholder="Enter Email Address" required/>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" class="form-control form-control-lg" 
                  onChange={onChangeEmpPass} value={epass} placeholder="Enter Password" required/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Sign in"/>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#3b5998', width: '33rem'}} href="#!" role="button">
                  <img src={facebook} width={35}/>Continue with Facebook
          </a><br /><br />
                <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor: '#55acee', width: '33rem'}} href="#!" role="button">
                <img src={twitter} width={35}/>Continue with Twitter</a>

              </form>
            </div>
          </div>
        </div>
      </section>
    </center>
    </div>
  )
}

export default UserLogin
