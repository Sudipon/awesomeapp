import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import './Navbar.css';
import "./Home.css";
import Card from 'react-bootstrap/Card';
import { useHistory, useParams } from 'react-router-dom';

function Ans(props) {
    const history = useHistory();
    const { qid } = useParams();
    let email = sessionStorage.getItem('useremail');
    let name = sessionStorage.getItem('username');
    let uid = sessionStorage.getItem('uid');

    const [eanswer, setEmpAnswer] = useState("");
    const [msg, setMessage] = useState("");
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
            <div className="font"><center>
                <NavigationBar />
                
                <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: "25px" }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Your Valuable Answer</p>

                                                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" className="form-control" value={name} disabled style={{fontSize: '18px'}}/>                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" className="form-control" value={email} disabled style={{fontSize: '18px'}}/>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <textarea type="text" className="form-control" value={que} disabled style={{fontSize: '18px'}}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="file" className="form-control" placeholder="Image link" onChange={handleImage} style={{fontSize: '18px'}}/>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline flex-fill mb-0">
                                                            <textarea type="text" className="form-control" value={eanswer} placeholder="Enter Your Answer" style={{fontSize: '18px'}}
                                                                onChange={onChangeEmpAnswer} required></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <input type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" value="Post" style={{fontSize: '18px'}}/>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" class="img-fluid" alt="Sample image" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </center>
            </div>
        )
    }

    else {
        return (
            <div className="font"><center>
                <NavigationBar />
                <br />
                <h3>You are not a user</h3>
                <h3>Please Login</h3>
            </center>
            </div>
        )
    }
}

export default Ans;