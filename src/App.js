import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import GetStarted from "./components/GetStarted/index";
import Faq from "./components/Faq-page/faq"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/faq" component={Faq} />
        <Route path="/mentors" />
        <Route path="/contact" />
        <Route path="/login" />
        <Route path="/account/#signup" component={GetStarted} />
      </Switch>
    </Router>
  );
};

export default App;
