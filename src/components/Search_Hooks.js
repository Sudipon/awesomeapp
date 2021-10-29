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
          <td style={{fontSize: '18px'}}>{currentrow.empname}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empemail}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empmobile}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empdob}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empgender}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empcountry}</td>
          <td style={{fontSize: '18px'}}>{currentrow.empaddress}</td>
          <td><button onClick={() => removeRow(index)} className="btn btn-danger" style={{fontSize: '18px'}}>Delete</button></td>
          
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
      <h1>ENTER EMAIL ID FOR SEARCH</h1><br />
      <b style={{ color: "red" }}>{msg}</b>
      <Card border="dark" style={{ width: '30rem', backgroundColor: 'Grey' }}>
            <Card.Body>
      <form onSubmit={handleSubmit}>
        <input type="email" value={eemail} className="form-control "
          onChange={onChangeEmpEmail}
          placeholder="EMAIL ID"
          required style={{fontSize: '18px'}}/>
        <br />
        <input type="submit" value="SEARCH EMPLOYEE" className="btn btn-success" style={{fontSize: '18px'}}/>
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

        <h1>EMPLOYEE DETAILS</h1><br />
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th style={{fontSize: '18px'}}>Name</th>
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
        </Table><br />
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
            <th style={{fontSize: '18px'}}>Questions</th>
            <th style={{fontSize: '18px'}}>Answers</th>
            <th style={{fontSize: '18px'}}>Registration Time</th>
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
