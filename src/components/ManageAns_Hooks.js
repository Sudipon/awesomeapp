import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table'

function ManageAns() {
  const [anslist, setAnsList] = useState([]);
  const [msg, setMessage] = useState("");
  const [status, setStatus] = useState(true);
  // const [authoremail, setEmpEmailId] = useState("");

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/ans')
      .then(response => {
        console.log(response.data)
        setAnsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewConList() {
    return anslist.map((currentrow, index) => {
      console.log(index)
      return (
        <tr key={index}>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empquestion}</td>
          <td>{currentrow.empanswer}</td>
          <td><img src={currentrow.img_path} /></td>
          <td>{currentrow.regdatetime}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger" style={{fontSize: '18px'}}>Delete</button></td>
        </tr>
      )
    })
  }

  function removeRow(index) {
    var tempemplist = [...anslist]; // make a new copy of array instead of mutating the same array directly. 
    let removerow = tempemplist.splice(index, 1);
    console.log(removerow[0].empemail)
    axios.delete('https://question-backend.herokuapp.com/ans/remove/' + removerow[0].empemail)
      .then(res => {
        console.log(res.data)
        setMessage('SUCCESSFULLY DELETED')
        setAnsList(tempemplist)
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
        <h1>ANSWERS DETAILS</h1><br />
        <b style={{ color: "red" }}>{msg}</b>
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th style={{fontSize: '18px'}}>Email</th>
              <th style={{fontSize: '18px'}}>Question</th>
              <th style={{fontSize: '18px'}}>Answers</th>
              <th style={{fontSize: '18px'}}>Images</th>
              <th style={{fontSize: '18px'}}>Registration Time</th>
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

export default ManageAns
