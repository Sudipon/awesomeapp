import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import "./Home.css";
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


function Registration() {
    let history = useHistory();
    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");
    const [epass, setEmpPass] = useState("");
    const [egender, setEmpGender] = useState("");
    const [ecountry, setEmpCountry] = useState("");
    const [eaddress, setEmpAddress] = useState("");
    const [msg, setMessage] = useState("");
    const [img_path, setimg_path] = useState("");


    const handleImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "sudipon_image")
        data.append('cloud_name', "sudipon")
        fetch(' https://api.cloudinary.com/v1_1/sudipon/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setimg_path(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    const onChangeEmpGender = (e) => setEmpGender(e.target.value);
    const onChangeEmpCountry = (e) => setEmpCountry(e.target.value);
    const onChangeEmpAddress = (e) => setEmpAddress(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
            empgender: egender,
            empcountry: ecountry,
            empaddress: eaddress
        }

        axios.post('https://question-backend.herokuapp.com/emp/register', empinfo)
            .then(res => {
                window.alert("REGISTRATION SUCCESSFUL");
                history.push("/userlogin");
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')
        setEmpGender('')
        setEmpCountry('')
        setEmpAddress('')

    }

    return (
        <div className="font"><center>
            
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand as={Link} to="/" style={{color: 'Blue', marginLeft: '1rem', fontSize: '35px', paddingTop: '15px'}}><b><i>Question</i></b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto" style={{marginLeft: '2rem', fontSize: '2rem'}} >
            <Nav.Link as={Link} to="/about" style={{color: 'Blue'}}>About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color: 'Blue'}}>Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/userlogin" style={{color: 'Blue'}}>Login</Nav.Link>
            <Nav.Link as={Link} to="/adminlogin" style={{color: 'Blue'}}>Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4" >
                                <div className="row g-0" >
                                    <div className="col-xl-6 d-none d-xl-block" >
                                        <img
                                            src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                                            alt="Sample photo"
                                            className="img-fluid" style={{height: '65rem', width: '65rem'}}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h1 className="mb-5 text-uppercase" >Registration form</h1>
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-outline mb-4">
                                                    <input type="file" className="form-control" placeholder="Image link" onChange={handleImage} style={{fontSize: '18px'}}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" className="form-control form-control-lg"
                                                        onChange={onChangeEmpName} value={ename} placeholder="Enter Your Name" required style={{fontSize: '18px'}}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" className="form-control form-control-lg"
                                                        onChange={onChangeEmpEmail} value={eemail} placeholder="Enter Your Email Id" required style={{fontSize: '18px'}}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="number" className="form-control form-control-lg"
                                                        onChange={onChangeEmpMobile} value={emobile} placeholder="Enter Your Mobile Number" required style={{fontSize: '18px'}}/>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" className="form-control form-control-lg"
                                                        onChange={onChangeEmpPass} value={epass} placeholder="Enter Your Password" required style={{fontSize: '18px'}}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="date" className="form-control form-control-lg"
                                                        onChange={onChangeEmpDOB} value={edob} placeholder="Enter Your Date of Birth" required style={{fontSize: '18px'}}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" className="form-control form-control-lg"
                                                        onChange={onChangeEmpGender} value={egender} placeholder="Enter Your Gender" required style={{fontSize: '18px'}}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" className="form-control form-control-lg"
                                                        onChange={onChangeEmpCountry} value={ecountry} placeholder="Enter Your Country" required style={{fontSize: '18px'}}/>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input type="text" className="form-control form-control-lg"
                                                        onChange={onChangeEmpAddress} value={eaddress} placeholder="Enter Your Address" required style={{fontSize: '18px'}}/>
                                                </div>

                                                <div className="d-flex justify-content-end pt-3">
                                                    <input type="submit" value="REGISTER" className="btn btn-success" style={{fontSize: '18px'}}/>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </center>
        </div>
    )
}


export default Registration
