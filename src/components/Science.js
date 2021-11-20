import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Scienceee from '../components/static/Scienceee.jpeg';
import { NavLink, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";


function Science() {
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
                    <img src={Scienceee} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "25rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>Can we touch anything?!</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>	Can we touch anything? Fairly simple question you would say. But after thinking about it, to touch, just means to interact with atoms of the object you are touching and yes this is something which is complex, you see we always have taught that like charges repel and same is true with electrons of us and that object we are touching when they get close they repel and there is a tiny gap which is so small that even some atoms cannot pass through the gap, but there is always a gap between objects even though it is really small. But we do feel like we are touching things right, i mean we can always feel that great feeling in the hands when we squish a stress ball, so how are we able to feel things even if we don't actually "touch" something. I mean really that is the beauty of things we are able to hold things even if we don't really touch them; friction exists between objects but they don't "touch"! It all happens due to tiny van der waals forces and atomic interaction, these fascinates me i will uncover secrets like this and bring you knowledge like this hope this article helps you in staying curious think of this when you touch things. I will write more in the future if you would like to see more please follow me and upvote this. BIG THANKS BE CURIOUS</p>
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
export default Science;    