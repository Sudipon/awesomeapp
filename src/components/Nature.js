import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Dream from '../components/static/Dream.jpg';
import { NavLink, useHistory } from 'react-router-dom';

function Nature() {

    return (
        <div className="font">
            <Container>
                <NavigationBar /><br /><br />
                <div>
                    <img src={Dream} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "25rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>How much wildlife has become extinct since the year 2000?</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>People are more aware in the 21st century than they were before, but many animals are still facing the risk of going, and some have already gone, extinct.

                                        These are some animals who were around at the beginning of the century, and are gone forever just 20 years later.

                                        Western black rhinoceros:

These rhinos are now gone forever due to poaching for horns sports as well as the industrial revolution in Africa. Only a handful were left some years ago, but no one paid any heed until they were extinct in the wild. Then the last two individuals also died in captivity. Now these giant beasts are gone forever simply because the public couldn’t care two pence about it.</p>
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
export default Nature;    