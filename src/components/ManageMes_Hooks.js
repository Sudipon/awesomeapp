import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import UpdateProfile from './UpdateProfile_Hooks'
import Table from 'react-bootstrap/Table'

function ManageMes() {
  const [emplist, setEmpList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  const [empemailid, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/con')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  function viewConList() {
    return emplist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empsubject}</td>
          <td>{currentrow.empmessage}</td>
          <td><a className="mailto" href="mailto:{currentrow.empemail}" className="btn btn-success">Mail</a></td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
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

  if (status === true) {
    return (
      <div className="font"><center>
        <NavigationBar />
        <br />
        <h3>EMPLOYEE DETAILS</h3><br />
        <b style={{ color: "red" }}>{msg}</b>
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {viewConList()}
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

export default ManageMes
