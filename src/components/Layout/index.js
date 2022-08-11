import React from "react";
import Header from "./Header";
import Routing from "../../config/Routing";
import { useLocation } from "react-router-dom";

const Layout = () => {
  // TODO change this after doing login!
  const location = useLocation();
  const isLoggedIn = !location.pathname.includes("auth");

  return (
    <>
      {isLoggedIn ? <Header /> : null}
      <Routing />
    </>
  );
};

export default Layout;
