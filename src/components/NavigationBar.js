import React, { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {useHistory } from 'react-router-dom';
import { Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import './Navbar.css';
import "./Home.css";
import Button from 'react-bootstrap/Button';

function Addquestion() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Link className="nav-link" style={{color: 'Blue'}} onClick={() => setModalShow(true)}>
        Add Question
      </Link>

      <Question
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
function Question(props) {
  let history = useHistory();
  let authuser = sessionStorage.getItem('useremail');
  let name = sessionStorage.getItem('username');
  let uid = sessionStorage.getItem('uid');

  const [equestion, setEmpQuestion] = useState("");
  const [ecatagory, setEmpCatagory] = useState("");

  const onChangeEmpQuestion = (e) => setEmpQuestion(e.target.value);
  const onChangeEmpCatagory = (e) => setEmpCatagory(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`EMAIL: ${eemail}`);

    const empinfo = {
      empquestion: equestion,
      authorname: name,
      authoremail: authuser,
      empcatagory: ecatagory,
    }

    axios.post('https://question-backend.herokuapp.com/que/question', empinfo)
      .then(res => {
        // console.log(res.data)
        window.alert("Question Posted Successfully");
        history.push("/dashbody");
      });

    setEmpQuestion('')
    setEmpCatagory('')
  }

  return (
    <Modal className="font"
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Your Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <input type="email" value={authuser} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
            required />
          <br />
          <input type="text" value={name} className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
            required />
          <br />
          <input type="text" value={ecatagory} placeholder="Enter the Category" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={onChangeEmpCatagory} required />
          <br />

          <textarea value={equestion} placeholder="Enter Your Question" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange={onChangeEmpQuestion} rows="3" >
          </textarea>
          <br />
          <input type="submit" className="btn btn-success" value="Post" onClick={props.onHide} />
        </form>
      </Modal.Body>
    </Modal>
  )
}

function NavigationBar() {

  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'ADMIN') {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/adminafterlogin" style={{marginLeft: '1rem'}}>ADMIN HOME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ marginLeft: '2rem'}}>
              <Nav.Link as={Link} to="/search">SEARCH</Nav.Link>
              <Nav.Link as={Link} to="/manageemp">EMPLOYEES</Nav.Link>
              <Nav.Link as={Link} to="/managemes">MESSAGES</Nav.Link>
              <Nav.Link as={Link} to="/manageadd">QUESTIONS</Nav.Link>
              <Nav.Link as={Link} to="/manageans">ANSWERS</Nav.Link>
              <Nav.Link as={Link} to="/logout" >LOGOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )

  }

  else if (authuser === 'USER') {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" style={{color: 'Blue', marginLeft: '1rem'}}><h1><b><i>Question</i></b></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" style={{marginLeft: '2rem'}} >
            <Nav.Link as={Link} to="/about" style={{color: 'Blue'}}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color: 'Blue'}}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/profile" style={{color: 'Blue'}}>Profile</Nav.Link>
            <Addquestion />
            <Nav.Link as={Link} to="/logout" style={{color: 'Blue'}}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  else {
    return (
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" style={{color: 'Blue', marginLeft: '1rem'}}><h1><b><i>Question</i></b></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" style={{marginLeft: '2rem'}}>
            <Nav.Link as={Link} to="/about" style={{color: 'Blue'}} >About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color: 'Blue'}}>Contact Us</Nav.Link>
            <div className="dropdown">
              <Nav.Link className="dropbtn" style={{color: 'Blue'}}>User</Nav.Link>
              <div className="dropdown-content">
                <Nav.Link as={Link} to="/userlogin" style={{color: 'Blue'}}>Login</Nav.Link>
                <Nav.Link as={Link} to="/register" style={{color: 'Blue'}}>Register</Nav.Link>
              </div>
            </div>
            <Nav.Link as={Link} to="/adminlogin" style={{color: 'Blue'}}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;
