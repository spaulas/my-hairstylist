import React from "react";
import { BrowserRouter } from "react-router-dom";
import ManagementApp from "./components/ManagementApp";
import Header from "./components/Header/Header";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <ManagementApp />
      </div>
    </BrowserRouter>
  );
};
