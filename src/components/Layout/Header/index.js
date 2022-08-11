import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Hi there</h1>
      <button onClick={() => navigate("/")}>HOME</button>
      <button onClick={() => navigate("/auth/sign-in")}>
        Sign in
      </button>
    </>
  );
};

export default Header;
