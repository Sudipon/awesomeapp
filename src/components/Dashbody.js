import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { NavLink, useHistory, useParams } from 'react-router-dom';
import "./Body.css";
import "./Navbar.css";
import NavigationBar from './NavigationBar';
import SimpleDateTime from 'react-simple-timestamp-to-date';
import { Col, Container, Row, Button, Card, Modal } from 'react-bootstrap';


function Addanswer(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button className="btn btn-success" style={{ position: 'absolute', top: '10px', right: '10px' }} onClick={() => setModalShow(true)}>
        Reply
      </Button>

      <Answer
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
function Answer(props) {
  const history = useHistory();
  const { qid } = useParams();
  let email = sessionStorage.getItem('useremail');
  let name = sessionStorage.getItem('username');
  let uid = sessionStorage.getItem('uid');

  const [eanswer, setEmpAnswer] = useState("");
  const [que, setquestion] = useState("");
  const [img_path, setimg_path] = useState("");

  useEffect(() => {
    axios.post('https://question-backend.herokuapp.com/que/' + qid)
      .then(res => {
        setquestion(res.data[0].empquestion);
        console.log(res.data);
      })
  }, [])

  const handleImage = async e => {
    e.preventDefault()
    let img = e.target.files[0]
    if (!img) return alert("File not exist.")
    //5242880 == 5 mb
    if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
    if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

    let data = new FormData()
    data.append('file', img)
    data.append('upload_preset', "sudipon_image")
    data.append('cloud_name', "sudipon")
    fetch(' https://api.cloudinary.com/v1_1/sudipon/image/upload', {
      method: "post",
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setimg_path(data.url)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }


  const onChangeEmpAnswer = (e) => setEmpAnswer(e.target.value);
  const onChangeImg_path = (e) => setimg_path(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    // console.log(`EMAIL: ${eemail}`);

    const empinfo = {
      empanswer: eanswer,
      img_path: img_path,
      empquestion: que,
      qid: qid,
      empemail: email,
      eid: uid,

    }

    axios.post('https://question-backend.herokuapp.com/ans/', empinfo)
      .then(res => {
        // sessionStorage.setItem("img", res.data[0].img_path)
        // sessionStorage.setItem("category", res.data[0].category)
        // console.log(res.data)
        // sessionStorage.setItem("useremail", res.data[0].empemail)
        // sessionStorage.setItem("userquestion", res.data[0].empquestion)
        window.alert('Answer Posted Successfully');
        history.push("/dashbody");
      })
      .catch(error => {
        console.log(error)
      })


    setEmpAnswer('')
    setimg_path('');
  }



  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser === 'USER') {
    return (
      <Modal className="font"
        {...props}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Your Valuable Answer
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} disabled className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
              required />
            <br />
            <input type="text" value={name} disabled className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
              required />
            <br />

            <textarea value={que} disabled className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
              rows="3" >
            </textarea>
            <br />
            <div className="form-group">
              <input type="file" className="form-control" placeholder="Image link" onChange={handleImage} />
            </div>
            <br />
            <textarea value={eanswer} placeholder="Enter Your Answer" className="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
              onChange={onChangeEmpAnswer} rows="3" >
            </textarea>
            <br />

            <input type="submit" className="btn btn-success" value="Post" onClick={props.onHide} />
          </form>
        </Modal.Body>
      </Modal>
    )
  }

  else {
    return (
      <div className="font">
        window.alert("You are not a user..Please Login")
      </div>
    )
  }
}



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
      {/* <Addanswer id={props.id}/> */}
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


function Dashbody(props) {

  let history = useHistory()
  const [quelist, setQueList] = useState([]);
  const [recentlist, setRecentList] = useState([]);


  useEffect(() => {
    axios.get('https://question-backend.herokuapp.com/que/')

      .then(response => {
        setQueList(response.data);
        setRecentList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })


  }, [])


  function viewquestions() {
    return quelist.map((currentrow, index) => {
      console.log(currentrow)
      return (
        <Card className="gradient-custom-4" style={{ width: "45rem", height: "16rem", backgroundColor: "#f5f5f5" }}>
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
      )
    })

  }


  function readmore(index) {
    var temp = [...quelist];
    history.push('/readmore/' + temp[index]._id);
  }


  let authuser = sessionStorage.getItem('Key_Veriable')
  // console.log(authuser)
  if (authuser === 'USER') {
    return (
      <div className="font" >
        <Container>
        <NavigationBar /><br /><br />
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <div className="sidebar-item categories" style={{ paddingLeft: "5rem", paddingTop: "3rem" }}>
              <div className="sidebar-heading">
                <h2>Categories</h2>
              </div>
              <div className="content">
                <ul>
                  <li><a href="/food">- Food</a></li>
                  <li><a href="/politics">- Politics</a></li>
                  <li><a href="/nature">- Nature</a></li>
                  <li><a href="/programming">- Programming</a></li>
                  <li><a href="/intelligence">- Intelligence</a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            {viewquestions()}
          </Col>
          <Col>
            <div className="sidebar-item tags" style={{ paddingLeft: "50px", paddingTop: "3rem" }}>
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
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
  else if (authuser === 'ADMIN') {
    return (<Redirect to="/userlogin" />)
  }

  else {
    return (
      <div className="font">
        <Container>
        <NavigationBar /><br /><br />
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <div className="sidebar-item categories" style={{ paddingLeft: "5rem", paddingTop: "3rem" }}>
              <div className="sidebar-heading">
                <h2>Categories</h2>
              </div>
              <div className="content">
                <ul>
                  <li><a href="/food">- Food</a></li>
                  <li><a href="/politics">- Politics</a></li>
                  <li><a href="/nature">- Nature</a></li>
                  <li><a href="/programming">- Programming</a></li>
                  <li><a href="/intelligence">- Intelligence</a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            {viewquestions()}
          </Col>
          <Col>
            <div className="sidebar-item tags" style={{ paddingLeft: "50px", paddingTop: "3rem" }}>
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
          </Col>
        </Row>
        </Container>
      </div>
    );
  }

}

export default Dashbody;
