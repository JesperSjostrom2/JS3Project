import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import './index.css';


/**
 * React app with a JSON server as database
 * @module /App.js
 * @description A fullstack project with frontend built in ReactJS and backend in JSON server
 * and a backend with JSON server
 * Read the "Readme"-file to get started on ur setup
 */

function App() {
  return (


    <Router>
      <div className="App">
        <Navbar/>
        <div className="HeaderCSS">
        <Header title="Welcome to Blogify" subTitle="I hope you enjoy your stay!"/>
        </div>
        <div className="CreateBlog">
        <Link to="/create"> Create new blog  </Link>
        </div>
        <div id="home-page">
  
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
      </div>
      
    </Router>
     
  );
}

export default App;
