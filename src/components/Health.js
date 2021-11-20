import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Heal from '../components/static/health.jpeg';
import { NavLink, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";


function Health() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or 
    // fake it using setTimeout;
    const loadData = async () => {

      // Wait for two second
      await new Promise((r) => setTimeout(r, 2000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };

    loadData();
  }, [])

  if (loading) {
    return (
      <div>
        <center>
          <div style={{paddingTop: '18rem'}}>
          <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          </div>
        </center>
      </div>
    )
  }

  else{

    return (
        <div className="font">
            <Container>
                <NavigationBar /><br /><br />
                <div>
                    <img src={Heal} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "20rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>Would itching inside you ear canal with your finger cause an ear infection?</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>A person who irritates the inner ear canal rubs off the secreted protective waxes there. This in turn causes the oil/ wax glands inside the ear to secrete MORE wax.

See what is happening there!!

It may NOW be infected OR it may be merely irritated. Time will tell !!

Use this (above) as a first-aid measure and also to kick the urge to stick stuff in your ears.

Don’t you remember your mother getting on your case for doing that !!</p>
                                        </div>
                                </div>
                            </Card.Body>
                        </Card><br />
                    </div>
                    <div class="col-md-4">
                        <div className="sidebar-item tags" style={{ paddingLeft: "10px" }}>
                            <div className="sidebar-heading">
                                <h2>Tag Clouds</h2>
                            </div>
                            <div className="content">
                                <ul>
                                    <li><a href="#">Amazon</a></li>
                                    <li><a href="#">Cypto Currency</a></li>
                                    <li><a href="#">Elon Musk</a></li>
                                    <li><a href="#">Dollar</a></li>
                                    <li><a href="#">Motivation</a></li>
                                    <li><a href="#">Indian Share Market</a></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
}
export default Health;    