import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/Landing";
import FAQ from "./components/FAQ"
import Account from "./components/account/account";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/faq" component={FAQ} />
        <Route path="/mentors" />
        <Route path="/contact" />
        <Route path="/account/:type" component={Account} />
      </Switch>
    </Router>
  );
};

export default App;
