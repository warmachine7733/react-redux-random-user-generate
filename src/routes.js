import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Profile from "./container/Profile";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
