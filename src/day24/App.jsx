import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Welcome from "./Welcome";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
