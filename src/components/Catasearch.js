import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SimpleDateTime from "react-simple-timestamp-to-date";
import NavigationBar from './NavigationBar';
// import SearchIcon from './img/search.svg';
import './Navbar.css';
import "./Home.css";
import { NavLink, useHistory } from 'react-router-dom';

function AnswerPanel(props) {
    let history = useHistory()
    const [Answers, setAnswers] = useState([])

    function viewanswers(row) {
        console.log(row)

        axios.post('https://question-backend.herokuapp.com/ans/view/' + row)
            .then(response => {
                setAnswers(response.data);
                // console.log(response.data)
            })
            .catch((error) => {
                console.log(error);

            })

    }

    return (
        <>
            <a onClick={() => { viewanswers(props.id) }} ><b>Answers:</b></a>

            <a onClick={() => { history.push("/ans/" + props.id) }} className="btn btn-success" style={{ position: 'absolute', top: '10px', right: '10px' }} >Reply</a>
            {
                Answers.map((cr, ind) => {
                    return (
                        <div id="my" key={ind}>
                            <div style={{ fontFamily: 'Garamond', fontSize: '1rem' }}>{cr.empanswer}</div>
                            <small className="text-muted">{cr.empemail}   <SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{cr.createdAt}</SimpleDateTime></small>
                        </div>
                    )
                })
            }
        </>
    )
}
function Catasearch(props) {
    let history = useHistory();
    const [ecat, setCat] = useState("");
    const [msg, setMsg] = useState("");
    const [quelist, setQueList] = useState([]);

    const onChangeCat = (e) => {
        setCat(e.target.value);
        setMsg(''); //REMOVE ERROE MSG
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        axios.get('https://question-backend.herokuapp.com/que/view/' + ecat)
            .then(res => {
                setQueList(res.data)

            })
            .catch(err => {
                setMsg("No news found on this catagory")
            })

        setCat('')
    }

    function viewquestions() {
        return quelist.map((currentrow, index) => {
            console.log(currentrow)
            return (
                <Col>
                    <div>
                        <center><p>{currentrow.empcatagory}</p></center>
                        <Card style={{ height: "16rem" }}>
                            <Card.Body>
                                <div className="blog-post">
                                    <div className="down-content">
                                        <span>{currentrow.authorname}</span><br />
                                        <b>{currentrow.empquestion}</b><br />
                                        <small className="text-muted"><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{currentrow.createdAt}</SimpleDateTime></small>
                                        <br />
                                        <a onClick={() => readmore(index)} style={{ position: 'absolute', top: '228px', right: '10px', color: 'blue' }} >...more</a>
                                        <AnswerPanel id={currentrow._id} />

                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            )
        })
    }
    function readmore(index) {
        var temp = [...quelist];
        history.push('/readmore/' + temp[index]._id);
    }

    return (
        <div className="font">
                <NavigationBar />
                <br />
                <Row>
                    <Col>
                    <center>
                        <b style={{ color: "red" }}>{msg}</b>
                        <form onSubmit={handleSubmit}>
                            <input type="search" value={ecat} className="form-control "
                                onChange={onChangeCat} placeholder="Search Food, Politics, Nature, Programming, Intelligence " style={{width: '50rem'}}
                                required />
                                <br />
                            <input type="submit" value="SEARCH  " style={{width: '20rem'}}/>
                        
                        </form>
                        </center>
                    </Col>

                </Row>
            <br /><br />
            <Container style={{ overflowX: 'auto' }}>
                <Row  >
                    {viewquestions()}
                </Row>

            </Container>

        </div>
    )
}
export default Catasearch;