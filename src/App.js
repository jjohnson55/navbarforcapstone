import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Banner from 'react-js-banner';


export default function App() {
  return (
    <Router>
      <div>
        <div class="banner"> 
        <Banner>
          UAFS Programming Tutoring System
        </Banner>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Assignments">Assignments</Link>
          </li>
          <li>
            <Link to="/Classes">Classes</Link>
          </li>
          <li>
            <Link to="/Resources">Resources</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          
        </ul>

        <hr />

        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Assignments">
            <Assignments />
          </Route>
          <Route path="/Classes">
            <Classes />
          </Route>
          <Route path="/Resources">
            <Resources />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
      <h2>Home</h2>
  );
}

function Assignments() {
  return (
    <h2>Assignments</h2>
  );
}

function Resources() {
  return (
      <h2>Resources</h2>
  );
}

function Contact() {
  return (
      <h2>Contact</h2>
  );
}

function Classes() {
  return (
      <h2>Classes</h2>
  );
}

