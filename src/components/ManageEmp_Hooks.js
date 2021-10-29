import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
          <td style={{fontSize: '18px'}}>{currentrow.empname}</td>
          <td style={{fontSize: '18px'}}><img src={currentrow.img_path} /></td>
          <td style={{fontSize: '18px'}}>{currentrow.empemail}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empmobile}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empdob}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empgender}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empcountry}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empaddress}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger" style={{fontSize: '18px'}}>Delete</button></td>
          <td><button onClick={() => updateRow(index)} className="btn btn-primary" style={{fontSize: '18px'}}>Update</button></td>
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

  if (status === true) {
    return (
      <div className="font"><center>
        <NavigationBar />
        <br />
        <h1>EMPLOYEE DETAILS</h1><br />
        <b style={{ color: "red" }}>{msg}</b>
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th style={{fontSize: '18px'}}>Name</th>
              <th style={{fontSize: '18px'}}>Images</th>
              <th style={{fontSize: '18px'}}>Email</th>
              <th style={{fontSize: '18px'}}>Mobile</th>
              <th style={{fontSize: '18px'}}>DOB</th>
              <th style={{fontSize: '18px'}}>Gender</th>
              <th style={{fontSize: '18px'}}>Country</th>
              <th style={{fontSize: '18px'}}>Address</th>
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

export default ManageEmp
