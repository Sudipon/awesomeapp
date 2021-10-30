import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
// import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import "./Home.css";
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

function Search() {
  // let uid = sessionStorage.getItem('userid');
  const [emplist, setEmpList] = useState([]);
  const [eemail, setEmpEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");
  const [empemailid, setEmpEmailId] = useState("");
  const [quelist, setQueList] = useState([]);

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('https://question-backend.herokuapp.com/que/search/' + eemail)
        .then(response => {
            setQueList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })

    axios.get('https://question-backend.herokuapp.com/emp/search/' + eemail)
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmailId('')
  }

 

function viewquestions() {
  return quelist.reverse().map((currentrow, index) => {
    // console.log(index)
      return (
          <tr key={index}>
              <td style={{fontSize: '18px'}}>{currentrow.empquestion} </td>
              <td style={{fontSize: '18px'}}>{currentrow.empanswer} </td>
              <td style={{fontSize: '18px'}}>{currentrow.regdatetime} </td>
              <td><button onClick={() => removeRow(index)} className="btn btn-danger" style={{fontSize: '18px'}}>Delete</button></td>
          </tr>
      )
  })
};

  function viewEmpList() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.empname}</td>
          <td>{currentrow.empemail}</td>
          <td>{currentrow.empmobile}</td>
          <td>{currentrow.empdob}</td>
          <td>{currentrow.empgender}</td>
          <td>{currentrow.empcountry}</td>
          <td>{currentrow.empaddress}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
          
        </tr>
      );
    });
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


  if (status === false) {
    return (
    <div className="font"><center>
      <NavigationBar />
      <br />
      <h3>ENTER EMAIL ID FOR SEARCH</h3><br />
      <b style={{ color: "red" }}>{msg}</b>
      <Card border="dark" style={{ width: '30rem', backgroundColor: 'Grey' }}>
            <Card.Body>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail} className="form-control "
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required/>
        <br />
        <input type="submit" value="SEARCH EMPLOYEE" className="btn btn-success"/>
      </form>
      </Card.Body>
      </Card>
      </center>
    </div>
    );
  }
  else {
    return (
      <div className="font"><center>
        <NavigationBar />
        <br />

        <h3>EMPLOYEE DETAILS</h3><br />
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
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
        </Table><br />
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
            <th>Questions</th>
            <th>Answers</th>
            <th>Registration Time</th>
            </tr>
          </thead>

          <tbody>
            {viewquestions()}
          </tbody>
        </Table>
        </center>
      </div>
    )
  }
}

export default Search
