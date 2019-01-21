import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/faq" />
          <Route path="/mentors" />
          <Route path="/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
