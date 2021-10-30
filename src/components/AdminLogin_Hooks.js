import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import "./Home.css";
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "admin") && (adminpassword === "openbaby")) {
      sessionStorage.setItem("Key_Veriable", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/adminafterlogin')

    }
    else
      setMessage('INVALID UID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" className="img-fluid"
                alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h3>Admin Login</h3><br />
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input type="text" className="form-control form-control-lg" style={{fontSize: '18px'}}
                    onChange={onChangeAdminUserId} value={adminuserid} placeholder="Admin User Id" />
                </div>

                <div className="form-outline mb-3">
                  <input type="password" className="form-control form-control-lg" style={{fontSize: '18px'}}
                    value={adminpassword} onChange={(e) => setAdminPassword(e.target.value)} placeholder="Admin password" />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <input type="submit" className="btn btn-primary btn-lg" 
                    style={{ paddingleft: '2.5rem', paddingright: '2.5rem', fontSize: '18px' }} value="Admin Login" />
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </center>
    </div>

  );
}
export default AdminLoginHooks