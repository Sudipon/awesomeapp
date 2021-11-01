import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Row, Form, Col, Modal } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import { Redirect } from "react-router-dom";
import Table from 'react-bootstrap/Table';


function Update() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} style={{ fontSize: '18px' }}>
        Update Your Profile
      </Button>

      <UpdateProfile
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
function UpdateProfile(props) {
  const [ename, setEmpName] = useState("");
  const [eemail, setEmpEmail] = useState("");
  const [emobile, setEmpmobile] = useState("");
  const [epass, setEmpPass] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
  const onChangeEmpPass = (e) => setEmpPass(e.target.value);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${ename}`);
    console.log(`EMAIL: ${eemail}`);

    const empinfo = {
      empname: ename,
      empemail: eemail,
      empmobile: emobile,
      emppass: epass,
    }

    axios.put('https://question-backend.herokuapp.com/emp/update', empinfo)
      .then(res => {
        console.log(res.data)
        window.alert('PROFILE UPDATED')
      })
      .catch(err => console.log(err))

    setEmpName('')
    setEmpEmail('')
    setEmpmobile('')
    setEmpPass('')

  }

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    let empemailid = sessionStorage.getItem('useremail')
    if (empemailid == null)
      empemailid = props.email
    axios.get('https://question-backend.herokuapp.com/emp/search/' + empemailid)
      .then(response => {
        console.log(response.data)
        const { empname, empemail, empmobile, emppass, empaddress } = response.data[0]
        setEmpName(empname)
        setEmpEmail(empemail)
        setEmpmobile(empmobile)
        setEmpPass(emppass)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <Modal className="font"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Your Profile
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" value={ename} disabled className="form-control " />
            </div>

            <div className="form-group">
              <input type="email" value={eemail} disabled className="form-control" />
            </div>

            <div className="form-group">
              <input type="number" value={emobile} className="form-control"
                onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                required />
            </div>

            <div className="form-group">
              <input type="password" value={epass} className="form-control"
                onChange={onChangeEmpPass} placeholder="Enter Password"
                required />
            </div>

            <input type="submit" className="btn btn-success" value="Update" onClick={props.onHide} />
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}


function Profile(props) {

  let uid = sessionStorage.getItem('userid');
  let name = sessionStorage.getItem('username');
  let email = sessionStorage.getItem('useremail');
  let mobile = sessionStorage.getItem('usermobile');
  let dob = sessionStorage.getItem('userdob');
  let pass = sessionStorage.getItem('userpass');
  let gender = sessionStorage.getItem('usergender');
  let country = sessionStorage.getItem('usercountry');
  let address = sessionStorage.getItem('useraddress');
  // let empid = sessionStorage.getItem('empid')

  const [quelist, setQueList] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`EMAIL: ${eemail}`);

    const empinfo = {
      empname: name,
      empemail: email,
      empmobile: mobile,
      empdob: dob,
      emppass: pass,
      empgender: gender,
      empcountry: country,
      empaddress: address,
    }

    axios.get('https://question-backend.herokuapp.com/emp', empinfo)
      .then(res => {
      });
  }

  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/que/' + email)
      .then(response => {
        console.log(response.data)
        setQueList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewquestions() {
    return quelist.reverse().map((currentrow, index) => {
      // console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.empquestion} </td>
          <td>{currentrow.regdatetime} </td>
        </tr>
      )
    })
  };

  let authuser = sessionStorage.getItem('Key_Veriable');
  console.log(authuser)
  if (authuser === 'USER')
    return (
      <div className="font">
        <NavigationBar />
        <br />
        <Row className="d-flex justify-content-center py-3">
          <h3 className="d-flex justify-content-center w-100 " >My Profile</h3>
        </Row>
        <Row>
          <Col>
            <div className="container"  >
              <div className="card carddesign " >
                <div className="p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      {/* <label>Name:</label>       */}
                      <input type="name" className=" form-control form-round" value={name} />
                    </div>
                    <div className="form-group">
                      {/* <label>Email:</label> */}
                      <input type="email" className=" form-control form-round" value={email} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="number" className=" form-control form-round" value={mobile} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="text" className=" form-control form-round" value={dob} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="text" className=" form-control form-round" value={pass} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="text" className=" form-control form-round" value={gender} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="text" className=" form-control form-round" value={country} />
                    </div>
                    <div className="form-group">
                      {/* <label>Mobile Number:</label> */}
                      <input type="text" className=" form-control form-round" value={address} />
                    </div>
                    <Update />

                  </form>
                </div>
              </div>

            </div>
          </Col>
          <Col>
            <Row className="d-flex justify-content-center py-3">
              <h3 className="d-flex justify-content-center w-100 " >All Uploaded Questions</h3>
            </Row>
            <Row>
              <Table responsive="sm" striped bordered hover>
                <thead>
                  <tr>
                    <th style={{ fontSize: '18px' }}>Questions</th>
                    <th style={{ fontSize: '18px' }}>Registration Time</th>
                  </tr>
                </thead>

                <tbody>
                  {viewquestions()}
                </tbody>
              </Table>
            </Row>
          </Col>
        </Row>
      </div>
    );
  else {
    return (<Redirect to="/userlogin" />)
  }
}
export default Profile;