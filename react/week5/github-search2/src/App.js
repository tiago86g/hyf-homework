import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import  Home  from "./components/Home";
import  HyfRepo  from "./components/HyfRepo";
import  About  from "./components/About";
import  User  from "./components/User";
import  Footer  from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">GitHub user search</Link>
            </li>
            <li>
              <Link to="/HyfRepo">HYF repo</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>

        <div className="main"> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/HyfRepo" component={HyfRepo} />
            <Route exact path="/About" component={About} />
            <Route exact path="/:id" component={User} />
          </Switch>
        </div>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
