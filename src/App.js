import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile_hooks';
import Dashbody from './components/Dashbody';
import Search from './components/Search_Hooks';
import Logout from './components/Logout';
import AdminAfterLogin from './components/AdminAfterLogin';
import AdminLogin from './components/AdminLogin_Hooks';
import UserLogin from './components/UserLogin_Hooks';
import UserAfterLogin from './components/UserAfterLogin';
import UpdateProfile from './components/UpdateProfile_Hooks';
import ManageEmp from './components/ManageEmp_Hooks';
import ManageMes from './components/ManageMes_Hooks';
import ManageAdd from './components/ManageAdd_Hooks';
import ManageAns from './components/ManageAns_Hooks';
import Add from './components/Add_hooks';
import Ans from './components/Ans_hooks';
import "./App.css";
import { Route } from 'react-router-dom';
import Registration from './components/Registration_Hooks';
import ReadMore from './components/ReadMore';
import Catasearch from './components/Catasearch';
import Food from './components/Food';
import Science from './components/Science';
import Nature from './components/Nature';
import Politics from './components/Politics';
import Programming from './components/Programming';
import Health from './components/Health';
import Intelligence from './components/Intelligence';



const App = () => {
  
  return (
    <div className="">
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashbody">
        <Dashbody />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/register">
        <Registration />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/userlogin">
        <UserLogin />
      </Route>
      <Route path="/userafterlogin">
        <UserAfterLogin />
      </Route>
      <Route path="/updateprofile">
        <UpdateProfile />
      </Route>
      <Route path="/manageemp">
        <ManageEmp />
      </Route>
      <Route path="/managemes">
        <ManageMes />
      </Route>
      <Route path="/manageadd">
        <ManageAdd />
      </Route>
      <Route path="/manageans">
        <ManageAns />
      </Route>
      <Route path="/add">
        <Add />
      </Route>
      <Route path="/catasearch">
        <Catasearch />
      </Route>
      <Route path="/ans/:qid">
        <Ans />
      </Route>
      <Route path="/readmore/:qid">
        <ReadMore />
      </Route>
      <Route path="/food">
        <Food />
      </Route>
      <Route path="/science">
        <Science />
      </Route>
      <Route path="/nature">
        <Nature />
      </Route>
      <Route path="/politics">
        <Politics />
      </Route>
      <Route path="/programming">
        <Programming />
      </Route>
      <Route path="/health">
        <Health />
      </Route>
      <Route path="/intelligence">
        <Intelligence />
      </Route>
      <Route path="/adminlogin" component={AdminLogin} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} /> 
           <Route path="/search" component={Search} />
           <Route path="/logout" component={Logout} />
           
    </div>
  );
};
export default App;    