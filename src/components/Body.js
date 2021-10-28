import React, { useState }  from "react";
import { NavLink, useHistory } from 'react-router-dom';
import CBI from '../components/static/CBI.jpeg';
import grenade from '../components/static/grenade.jpg';
import "./Body.css";
import "./Navbar.css";
import Nav from '../components/Nav.js';


function Body() {
  
    
  
  
  return (
    <div className="bod">
        <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><h1><b><i>Questions</i></b><em></em></h1></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/userlogin">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        <div className="row">
          <div className="column left">
            <div className="sidebar-item categories">
              <div className="sidebar-heading">
                <h2>Categories</h2>
              </div>
              <div className="content">
                <ul>
                  <li><a href="#">- Indian Army</a></li>
                  <li><a href="#">- Intelligence Bureau</a></li>
                  <li><a href="#">- Indian Air Force</a></li>
                  <li><a href="#">- RAW</a></li>
                  <li><a href="#">- CBI</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="column middle">
            <div className="blog-post">
              <div className="down-content">
                <span>gsudipon@gmail.com</span>
                <p><b>Why does the United States government not consilidate all of their intelligence agencies (CIA/FBI/NSA/DEA/ETC) under one group?</b></p>
                <p>Because that would degrade the quality of intelligence product available to the US. By this, I mean that nobody relies on single source intel, even if it’s only researching medical symptoms on the internet. One would normally seek answers from three or more highly rated medical websites and if they reached a consensus, then take action based on that consensus. If you only used one source, what if it was wrong? Or, used faulty methodology to arrive at their answer? What if the worker bee who wrote the opinion had a bad day, with distractions and actually wrote the wrong info?Having multiple intelligence collection efforts simultaneously working to defend against specific threats is much like having a brain storming session at corporate, where no answer, no matter how inane is wrong. They are all given consideration and a consensus is eventually reached. This consensus, having gone through peer review and quality control checkpoints is likely the best available opinion.Yes, it does take quite many more resources to have redundant efforts ongoing. But, in an area as extremely important as this, redundancy is not necessarily a bad thing and accuracy and timeliness is of paramount importance.Just as police officers interview every possible witness to a crime (and sometimes get multiple conflicting statements), somewhere in the middle lies the truth.This is very similar to the military decision-making process (MDMP) where everyone involved weighs in and eventually, the enemy’s most likely course of action is determined, based on a myriad of factors. Once the most likely course of action is determined, MDMP is used to determine our course of action to blunt theirs, or to utilize theirs to further our own goals. If interested, look up the seven step military decision-making process to learn more.</p>
              </div>
              <div className="blog-thumb">
                <img src={CBI} style={{width: "680px", height: "350px"}}/>
              </div>
            </div>
            <div className="blog-post">
              
              <div className="down-content">
                <span>gsudipon@gmail.com</span>
                <p><b>How Grenade works?</b></p>
                <p>The outer shell of the grenade, made of serrated cast iron, holds a chemical fuze mechanism, which is surrounded by a reservoir of explosive material. The grenade has a filling hole for pouring in the explosive material.The firing mechanism is triggered by a spring-loaded striker inside the grenade. Normally, the striker is held in place by the striker lever on top of the grenade, which is held in place by the safety pin. The soldier grips the grenade so the striker lever is pushed up against the body, pulls out the pin and then tosses the grenade. Here's what happens inside once the grenade is released:With the pin removed, there is nothing holding the lever in position, which means there is nothing holding the spring-loaded striker up. The spring throws the striker down against the percussion cap. The impact ignites the cap, creating a small spark.The spark ignites a slow-burning material in the fuze. In about four seconds, the delay material burns all the way through.The end of the delay element is connected to the detonator, a capsule filled with more combustible material. The burning material at the end of the delay ignites the material in the detonator, setting off an explosion inside the grenade.The explosion ignites the explosive material around the sides of the grenade, creating a much larger explosion that blows the grenade apart.Pieces of metal from the outer casing fly outward at great speed, imbedding in anybody and anything within range. This sort of grenade may contain additional serrated wire or metal pellets for increased fragmentation damage.</p>
              </div>
              <div className="blog-thumb">
                <img src={grenade} style={{width: "680px", height: "350px"}}/>
              </div>
            </div>
            <div className="main-button">
              <a href="#">View All Posts</a>
            </div>
          </div>
          <div className="column right">
            <div className="sidebar-item recent-posts">
              <div className="sidebar-heading">
                <h2>Recent</h2>
              </div>
              <div className="content">
                <ul>
                  <li><a href="#">
                    <h5>What is the best picture on the Internet?</h5>
                      </a>
                  </li>
                  <li> <a href="#">
                    <h5>What is the saddest picture you've seen on the internet today?</h5>
                      <span>May 28, 2021</span>
                        </a>
                  </li>
                  <li> <a href="#">
                    <h5>What is the best thing you came across on the internet today?</h5>
                    <span>May 14, 2021</span>
                      </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-item tags">
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
                  <li><a href="#">Responsive</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  
}

export default Body;
