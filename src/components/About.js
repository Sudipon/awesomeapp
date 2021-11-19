import React, { useState } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import "./About.css";
import NavigationBar from "./NavigationBar";


function About() {
  return (
    <div className="body">
      <NavigationBar /><br /><br />
      <div className="bg-light">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h2 className="display-4" style={{fontSize: '40px'}}>About us page</h2>
              <p className="lead text-muted mb-0" style={{fontSize: " 17px"}}>Our mission is to share and grow the world’s knowledge. Not all knowledge can be written down, but much of that which can be, still isn't. It remains in people’s heads or only accessible if you know the right people. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.</p>
            </div>
            <div className="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" /></div>
          </div>
        </div>
      </div>

      <div className="bg-white py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Gather around a question</h2>
              <p className="font-italic text-muted mb-4" style={{fontSize: " 17px"}}>The heart of our questions — questions that affect the world, questions that explain recent world events, questions that guide important life decisions, and questions that provide insights into why other people think differently. It is a place where you can ask questions that matter to you and get answers from people who have been there and done that. It is where scientists, artists, entrepreneurs, mechanics, and homemakers take refuge from misinformation and incendiary arguments to share what they know.</p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm" style={{fontSize: " 17px"}}>Learn More</a>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto"><img src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg" alt="" className="img-fluid mb-4 mb-lg-0" /></div>
            <div className="col-lg-6"><i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Tell a story</h2>
              <p className="font-italic text-muted mb-4" style={{fontSize: " 17px"}}>Ever since the first humans gathered around a fire and turned their gaze to the stars, humanity has shared knowledge through stories. Spaces are digital campfires for collective meaning making which expand knowledge sharing from interrogative to narrative. In Spaces, creators build audiences of millions for their unique insights or audiences of thousands for niche knowledge that can't be found anywhere else.</p>
              <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm" style={{fontSize: " 17px"}}>Learn More</a>
            </div>
          </div>
        </div>
      </div>


      <footer class="bg-light pb-5">
        <div class="container text-center">
          <p class="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
