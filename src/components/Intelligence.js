import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Inte from '../components/static/Intelligence.jpeg';
import { NavLink, useHistory } from 'react-router-dom';

function Intelligence() {

    return (
        <div className="font">
            <Container>
                <NavigationBar />
                <div>
                    <img src={Inte} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "10rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>	Is ISI is strong enough than RAW?</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>No, Raw is stronger than ISI. Raw has more enough intelligence army who can easily beat any type of terrorist army</p>
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
export default Intelligence;    