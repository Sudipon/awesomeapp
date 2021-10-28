import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { NavLink, useHistory } from 'react-router-dom';

function UpdateProfile(props) {
    let history = useHistory();
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
                history.push("/profile")
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
                const { empname, empemail, empmobile, emppass } = response.data[0]
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
        <div>
            <div className="font"><center>
                <NavigationBar />
                <br />
                <div className="container">

                    <h3>PROFILE UPDATE</h3>
                    <b style={{ color: "red" }}> {msg}</b>
                    <div>
                        <Card border="dark" style={{ width: '30rem', backgroundColor: 'Grey' }}>
                            <Card.Body>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input type="text" value={ename} disabled className="form-control "/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="email" value={eemail} disabled className="form-control"/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="number" value={emobile} className="form-control"
                                            onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                                            required />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <input type="password" value={epass} className="form-control"
                                            onChange={onChangeEmpPass} placeholder="Enter Password"
                                            required />
                                    </div>
                                    <br />

                                    <input type="submit" value="UPDATE PROFILE" className="btn btn-primary" />

                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </center>
            </div>
        </div>

    )
}

export default UpdateProfile