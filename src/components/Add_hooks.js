import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import { useHistory, useParams } from 'react-router-dom';

function Add(props){
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
        <div className="font"><center>
           <NavigationBar />
            <br />
            <br />
            <h3>Add Your Question</h3>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <Card border="dark" style={{ width: '30rem', backgroundColor: 'Grey' }}>
            <Card.Body>
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
                    onChange={onChangeEmpQuestion} rows="3" required>
                </textarea>
                <br />

                <input type="submit" value="Post" className="btn btn-success" />

            </form>
            </Card.Body>
            </Card>
            </center>
        </div>
    )
}

export default Add;