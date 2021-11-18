import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Code from '../components/static/Code.jpeg';
import { NavLink, useHistory } from 'react-router-dom';

function Programming() {

    return (
        <div className="font">
            <Container>
                <NavigationBar />
                <div>
                    <img src={Code} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "20rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>What is a Stack and What will be C program for various operations on the Stack?</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>The Stack is a linear data structure. It based on the concept of the LIFO(Last In First Out) for storing and retrieving data in it.

You can easily understand the Stack with real-time examples. For Example, a stack of the plate in a canteen where a waiter always put a new plate on the top of the stack and people always pick up the topmost plate. It’s is the concept of LIFO.

When we implement a stack in the program we usually use Array. There is always a pointer which points the topmost element. You can easily understand by the following diagram.</p>
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
export default Programming;    