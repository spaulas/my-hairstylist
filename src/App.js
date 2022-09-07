import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

export default () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
