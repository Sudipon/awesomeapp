import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
import UpdateProfile from './UpdateProfile_Hooks'
import Table from 'react-bootstrap/Table'

function ManageEmp() {
  const [emplist, setEmpList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [empemailid, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/emp')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td >{currentrow.empname}</td>
          <td><img src={currentrow.img_path} /></td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          <td><button onClick={() => updateRow(index)} className="btn btn-primary">Update</button></td>
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    axios.delete('https://question-backend.herokuapp.com/emp/remove/' + removerow[0].empemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setEmpList(tempemplist)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })
  }

  function updateRow(index) {
    var tempemplist = [...emplist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    setStatus(false)
    setEmpEmailId(removerow[0].empemail)
  }

  let authuser = sessionStorage.getItem('Key_Veriable');
  console.log(authuser)
  if (authuser === 'ADMIN') {
    if (status === true) {
      return (
        <div className="font"><center>
          <NavigationBar />
          <br /><br /><br />
          <h3>EMPLOYEE DETAILS</h3><br />
          <b style={{ color: "red" }}>{msg}</b>
          <Table responsive="sm" striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Images</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Address</th>
              </tr>
            </thead>

            <tbody>
              {viewEmpList()}
            </tbody>
          </Table>
        </center>
        </div>
      )
    }
    else {
      return (
        <div><center>
          <UpdateProfile email={empemailid} />
        </center>
        </div>
      )
    }
  }
  else {
    return (<Redirect to="/adminlogin" />)
  }
}

export default ManageEmp
