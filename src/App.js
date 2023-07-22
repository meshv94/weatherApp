import React from "react";
import Home from "./components/Home";
import Weather from "./components/Weather";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/Weather">
              <Weather />
          </Route>
          <Redirect to="/"/>
      </Switch>
    </Router>
      
      
    </>
  );
}

export default App;






