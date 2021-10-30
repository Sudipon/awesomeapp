import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table'

function ManageAdd() {
  const [quelist, setQueList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  // const [authoremail, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/que')
      .then(response => {
        console.log(response.data)
        setQueList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewConList() {
    return quelist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.authoremail}</td>
          <td>{currentrow.empcatagory}</td>
          <td>{currentrow.empquestion}</td>
          <td>{currentrow.regdatetime}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempemplist = [...quelist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].authoremail)
    axios.delete('https://question-backend.herokuapp.com/que/remove/' + removerow[0].authoremail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setQueList(tempemplist)
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
        <h3>QUESTIONS DETAILS</h3><br />
        <b style={{ color: "red" }}>{msg}</b>
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Email</th>
              <th>Catagory</th>
              <th>Question</th>
              <th>Registration Time</th>
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
}

export default ManageAdd
