import React from "react";
import { Switch, Route } from "react-router-dom";
import ManagementApp from "../../components/ManagementApp";
import AuthApp from "../../components/AuthApp";

const Routing = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthApp} />
      <Route path="/" component={ManagementApp} />
    </Switch>
  );
};

export default Routing;
