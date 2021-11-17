import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Poli from '../components/static/Politics.jpeg';
import { NavLink, useHistory } from 'react-router-dom';

function Politics() {

    return (
        <div className="font">
            <Container>
                <NavigationBar />
                <div>
                    <img src={Poli} style={{ width: "100%", height: "30rem", padding: '1rem' }} />
                </div>
                <div className="row">
                    <div className="col-md-8" style={{ paddingLeft: '2rem', height: '50rem' }}>
                        <Card className="gradient-custom-4" style={{ height: "30rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>Sudipon Ghosh</span><br />
                                        <b>Why are the Democrats to blame for the current inflation escalation?</b><br />
                                        <b>Answer: </b>
                                        <br />
                                        <p>Why are the Democrats to blame for the current rising Inflation rates?

[EXTRARPT] It's been quite a spectacle watching people who credit Democrats with every job created and every percentage point gained in economic growth suddenly arguing that the White House is completely powerless in the face of our current economic predicament.

Presidents generally get far too much credit and/or blame for our fortunes, but they can certainly exacerbate existing problems. And our political class has certainly aggravated them with unbridled spending and support for policies that disincentivize work and inhibit energy production.

Wholesale prices rose 8.6% from a year ago in October, another record annual gain and the biggest spike in more than a decade. Inflation hit 6.2%, the highest rate of annualized inflation since the 1990s. Whereas once voters were promised "transitory" inflation, today, economists warn that we'll be in this for a while.

"Reversing this trend is a top priority for me," President Joe Biden said Nov. 10, after months of his administration's dismissing inflation as a "high-class" and short-term predicament -- there's "nobody suggesting there's unchecked inflation on the way -- no serious economist," the president promised a few months ago. Biden's National Economic Council Deputy Director Brian Deese had argued that inflation was actually a good thing, and the entire administration had pushed the notion that the best prescription to alleviate inflation was more big progressive spending -- part of a broader trend of Democrats saying utterly absurd things about the economy.

Democrats have seriously underestimated the frustration that voters, unable to get the things they desire nearly instantaneously, are going to feel, as people such as Jen Psaki crack jokes about supply-chain problems, "the tragedy of the treadmill that's delayed." EXTRARPT]. SP. P.S. How about the rising prices across the whole nation????</p>
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
export default Politics;    