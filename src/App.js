import React from "react";
import { BrowserRouter } from "react-router-dom";
import ManagementApp from "./components/ManagementApp";
import AuthApp from "./components/AuthApp";
import Header from "./components/Header/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <ManagementApp />
        <hr />
        <AuthApp />
      </div>
    </BrowserRouter>
  );
};
