import React from 'react';
import Header from './components/Header';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import PostUser from './components/PostUser';
import AboutUs from './components/AboutUs';
import ManageUsers from './components/ManageUsers';
import EditUser from './components/EditUser';
import UserDetails from './components/UserDetails';


function App() {
  return (

    <>
    <Header/>
    <Switch>
     <Route path="/" component={Home} exact  />
     <Route path="/add-users" component={PostUser} exact  />\
     <Route path="/about-us" component={AboutUs} exact  />
     <Route path="/manage-users" component={ManageUsers} exact  />
     <Route path="/manage-users/:id" component={UserDetails} exact  />
     <Route path="/manage-users/edit/:id" component={EditUser} exact  />
    </Switch>
    <Footer/>
     
    </>
    
  );
}

export default App;
