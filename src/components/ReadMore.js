import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { Row, Col, Container, Card } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css"
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

function AnswerPanel(props) {

    const [Answers, setAnswers] = useState([])

    function viewanswers(row) {
        console.log(row)
        // var temp = [...quelist]
        // console.log(temp[index]._id)
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
            {
                Answers.map((cr, ind) => {
                    return (
                        <div id="my" key={ind}>
                            <Card className="gradient-custom-4">
                                <Card.Body>
                                    {cr.empanswer}<br /><br />
                                    <center><Card.Img style={{ minWidth: "0px", maxWidth: "700px", maxHeight: "700px", borderRadius: '30%' }} src={cr.img_path} /></center>
                                    <small className="text-muted" style={{ position: 'absolute', right: '10px' }}>{cr.empemail}<SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{cr.createdAt}</SimpleDateTime></small>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }


        </>
    )
}

function ReadMore() {
    let history = useHistory();
    const { qid } = useParams();
    // console.log(qid);
    const [quelist, setQueList] = useState([]);

    useEffect(() => {
        axios.post('https://question-backend.herokuapp.com/que/' + qid)
            .then(response => {
                setQueList(response.data);
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    function view(props) {
        return quelist.map((currentrow, index) => {
            return (
                <Col key={index} style={{}}>
                    <Card className="gradient-custom-4">
                        <Card.Body>
                            <span>{currentrow.authorname}</span><br />
                            <b>{currentrow.empquestion}</b><br />
                            <small className="text-muted"><SimpleDateTime dateFormat="DMY" dateSeparator="/" timeSeparator=":">{currentrow.createdAt}</SimpleDateTime></small>
                            <a onClick={() => reply(index)} className="btn btn-primary" style={{ position: 'absolute', top: '10px', right: '10px' }} >Reply</a>
                        </Card.Body>
                    </Card>

                    <AnswerPanel id={currentrow._id} />

                </Col>
            )
        })
    }

    function reply(index) {
        var temp = [...quelist];
        history.push('/ans/' + temp[index]._id);
    }


    let authuser = sessionStorage.getItem('Key_Veriable');
    console.log(authuser)
    if (authuser === 'USER') {
        return (
            <div className="font" style={{ backgroundColor: "#E8DDE3", height: "200rem" }}>
                <NavigationBar />
                <br /><br />
                <Container >
                    {view()}
                    <Link to="/dashbody" onClick={() => localStorage.removeItem('readmore')} >  Go Back</Link>
                </Container>

                <br /><br />
            </div>
        )
    }
    else {
        return (<Redirect to="/userlogin" />)
    }
}
export default ReadMore;