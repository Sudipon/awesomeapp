import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Inte from '../components/static/Intelligence.jpeg';
import { NavLink, useHistory } from 'react-router-dom';
import Loader from "react-loader-spinner";


function Intelligence() {
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
                    <div style={{ paddingTop: '18rem' }}>
                        <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                    </div>
                </center>
            </div>
        )
    }

    else {

        return (
            <div className="font">
                <Container>
                    <NavigationBar /><br /><br />
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
                                        <li><a href="https://www.quora.com/search?q=amazon">Amazon</a></li>
                                        <li><a href="https://cryptocurrency.quora.com/?q=cryptocu">Cypto Currency</a></li>
                                        <li><a href="https://www.quora.com/search?q=Elon%20Musk">Elon Musk</a></li>
                                        <li><a href="https://www.quora.com/search?q=Dollar">Dollar</a></li>
                                        <li><a href="https://www.quora.com/search?q=Motivation">Motivation</a></li>
                                        <li><a href="https://www.quora.com/search?q=Indian%20share%20market">Indian Share Market</a></li>

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
export default Intelligence;    