import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/faq" />
        <Route path="/mentors" />
        <Route path="/contact" />
        <Route path="/login" />
      </Switch>
    </Router>
  );
};

export default App;
