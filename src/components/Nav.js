import React, { useState }  from "react";
import { NavLink, useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import './Navbar.css';
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav(){

return(
    <div className="nav">

<navbar className="navbar navbar-expand-lg">
            <nav>
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><h1><b><i>Questions</i></b><em></em></h1></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </div>
                    </nav >
                    <nav className="mr-sm-2">
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" >About Us</NavLink>
                            </li>
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    </nav>
                    </navbar>
            </div>
);
}

export default Nav;