import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./config/Routing/Routing";

export default () => {
  console.log("APP container");
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
