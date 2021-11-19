import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Row, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Navbar.css';
import "./Home.css";
import NavigationBar from './NavigationBar';

function Contact() {

  const [ename, setEmpName] = useState("");
  const [eemail, setEmpEmail] = useState("");
  const [esubject, setEmpSubject] = useState("");
  const [emessage, setEmpMessage] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeEmpName = (e) => setEmpName(e.target.value);
  const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
  const onChangeEmpSubject = (e) => setEmpSubject(e.target.value);
  const onChangeEmpMessage = (e) => setEmpMessage(e.target.value);



  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${ename}`);
    console.log(`EMAIL: ${eemail}`);

    const contactinfo = {
      empname: ename,
      empemail: eemail,
      empsubject: esubject,
      empmessage: emessage,


    }

    axios.post('https://question-backend.herokuapp.com/con/contact', contactinfo)
      .then(res => {
        console.log(res.data)
        window.alert("Message Sent successfully");

      });

    setEmpName('')
    setEmpEmail('')
    setEmpSubject('')
    setEmpMessage('')

  }

  return (
    <div className="font">
      <NavigationBar /><br /><br />
      <div >
        <Row className="d-flex justify-content-center py-3">
          <h3 className="d-flex justify-content-center w-100 " >Contact Us</h3>
        </Row>
        <Row>
          <Col>
            <div className="container"  >
              <div className="card carddesign " style={{backgroundImage: 'linear-gradient(red, yellow, green)'}}>
                <div className="p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">

                      <input type="name" className=" form-control form-round" placeholder="Enter Your Name" value={ename}
                        onChange={onChangeEmpName} required />
                    </div>
                    <div className="form-group">

                      <input type="email" className=" form-control form-round" placeholder="Enter Your Email" value={eemail}
                        onChange={onChangeEmpEmail} required />
                    </div>
                    <div className="form-group">

                      <input type="subject" className=" form-control form-round" placeholder="Enter Your Subject" value={esubject}
                        onChange={onChangeEmpSubject} required />
                    </div>
                    <div className="form-group">

                      <textarea type="message" className=" form-control form-round" placeholder="Message" required rows="3" value={emessage}
                        onChange={onChangeEmpMessage} >
                      </textarea>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block  form-round" value="Send Message" />
                  </form>
                </div>
              </div><br />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7376.928261210691!2d88.42013562485519!3d22.411550241063388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026df22880af19%3A0x9d6eaedb8fa4996b!2sJN%20Bose%20Rd%2C%20Rajpur%20Sonarpur%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1635266633119!5m2!1sen!2sin"  width="690rem" height="210rem" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </Col>
          <Col>
            <Row>
              <div className="container" >
                <div className="card carddesign " style={{backgroundImage: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'}}>
                  <div className="p-4">
                    <h4>College Contact:</h4>
                    <h6>* Gargi Memorial Institute of Technology, Balarampur</h6>

                    <h6>* Baruipur, Kolkata - 700144</h6>
                    <h6>* +91 33 2433-0113</h6>
                    <h6>* +91 33 2701-7511</h6>
                  </div>
                </div>
              </div>
            </Row>
            <br />
            <Row>
              <div className="container" >
                <div className="card carddesign " style={{backgroundImage: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)'}}>
                  <div className="p-4">
                    <h4>City Office Contact:</h4>
                    <h6>* 3, Suren Tagore Road</h6>
                    <h6>* Kolkata - 700 019</h6>
                    <h6>* +91 33 2440-6245</h6>
                    <h6>* +91 33 2460-5124</h6>

                  </div>
                </div>
              </div>
            </Row>
            <br />
            <Row>
              <div className="container" >
                <div className="card carddesign " style={{backgroundImage: 'linear-gradient(red,yellow,green)'}}>
                  <div className="p-4">
                    <h4>24 * 7 Help Line:</h4>
                    <h6>* gsudipon@gmail.com</h6>
                    <h6>* +91 9007969453</h6>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact
