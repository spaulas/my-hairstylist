import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <h1>Hi there</h1>
      <button onClick={() => history.push("/")}>HOME</button>
    </>
  );
};

export default Header;
