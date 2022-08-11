import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

export default () => {
  console.log("APP container");
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
