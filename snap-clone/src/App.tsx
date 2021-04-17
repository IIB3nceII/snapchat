import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebcamCapture from "./WebcamCapture";
import Preview from "./Preview";
import Chats from "./Chats";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app_body">
          <Switch>
            <Route exact path="/chats" component={Chats} />
            <Route exact path="/preview" component={Preview} />
            <Route exact path="/" component={WebcamCapture} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
