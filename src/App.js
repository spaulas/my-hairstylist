import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ManagementApp from "./components/ManagementApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={ManagementApp } />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
