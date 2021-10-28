import axios from "axios";
import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import './Navbar.css';
import "./Home.css";
import Summer from '../components/static/Summer.png';
import search2 from '../components/static/search2.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

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
  const [msg, setMessage] = useState("");

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
        // sessionStorage.setItem("useremail", res.data[0].empemail)
        // sessionStorage.setItem("userquestion", res.data[0].empquestion)
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




function Home() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'USER') {
    let name = sessionStorage.getItem('username')
    console.log(name)
    return (
      <div className="font">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} to="/" style={{ color: 'Blue', marginLeft: '1rem' }}><h1><b><i>Question</i></b></h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" style={{ marginLeft: '2rem' }} >
            <Nav.Link as={Link} to="/catasearch"><img src={search2} width={30}/></Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'Blue' }}>About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'Blue' }}>Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/profile" style={{ color: 'Blue' }}>Profile</Nav.Link>
              <Addquestion />
              <Nav.Link as={Link} to="/logout" style={{ color: 'Blue' }}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="what">
          <a><b>What is your Question?</b></a>
        </div>
        <br />

        <div>
          <section className="bg-repeat-x bg-center">
            <img src={Summer} style={{ width: "auto", height: "600px" }} />
          </section>
        </div>
        <div>
          <div className="container">
            <section>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🏠</span><span className="text-xs text-primaryText">Home</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🧪</span><span className="text-xs text-primaryText">Science</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">➗</span><span className="text-xs text-primaryText">Math and Arithmetic</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🌎</span><span className="text-xs text-primaryText">History</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">📖</span><span className="text-xs text-primaryText">Literature and Language</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">📱</span><span className="text-xs text-primaryText">Technology</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🧪</span><span className="text-xs text-primaryText">Health</span></div></NavLink>
              <NavLink to="/userafterlogin"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🏆</span><span className="text-xs text-primaryText">Leaderboard</span></div></NavLink>
            </section>

          </div>
        </div>
      </div>
    )
  }

  else {
    return (
      <div className="font">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} to="/" style={{ color: 'Blue', marginLeft: '1rem' }}><h1><b><i>Question</i></b></h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" style={{ marginLeft: '2rem' }}>
            <Nav.Link as={Link} to="/catasearch"><img src={search2} width={30}/></Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ color: 'Blue' }} >About Us</Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: 'Blue' }}>Contact Us</Nav.Link>
              <div className="dropdown">
                <Nav.Link className="dropbtn" style={{ color: 'Blue' }}>User</Nav.Link>
                <div className="dropdown-content">
                  <Nav.Link as={Link} to="/userlogin" style={{ color: 'Blue' }}>Login</Nav.Link>
                  <Nav.Link as={Link} to="/register" style={{ color: 'Blue' }}>Register</Nav.Link>
                </div>
              </div>
              <Nav.Link as={Link} to="/adminlogin" style={{ color: 'Blue' }}>Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="what">
          <a><b>What is your Question?</b></a>
        </div>
        <div>
          <section className="bg-repeat-x bg-center">
            <img src={Summer} style={{ width: "auto", height: "600px" }} />
          </section>
        </div>
        <div>
          <div className="container">
            <section>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🏠</span><span className="text-xs text-primaryText">Home</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🧪</span><span className="text-xs text-primaryText">Science</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">➗</span><span className="text-xs text-primaryText">Math and Arithmetic</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🌎</span><span className="text-xs text-primaryText">History</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">📖</span><span className="text-xs text-primaryText">Literature and Language</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">📱</span><span className="text-xs text-primaryText">Technology</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🧪</span><span className="text-xs text-primaryText">Health</span></div></NavLink>
              <NavLink to="/dashbody"><div className="border border-solid border-primaryLight p-1 pr-2 pl-2 rounded flex-col m-2 cursor-pointer pl-4 pr-4 py-2"><span className="topicEmoji">🏆</span><span className="text-xs text-primaryText">Leaderboard</span></div></NavLink>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
