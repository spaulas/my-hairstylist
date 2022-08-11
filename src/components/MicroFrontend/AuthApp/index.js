import React, { useRef, useEffect } from "react";
import { mount } from "auth/AuthApp";
import { useLocation, useNavigate } from "react-router-dom";

const AuthApp = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  let onParentNavigate = () => {};

  useEffect(() => {
    ({ onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (nextPathname !== location.pathname) {
          navigate(nextPathname);
        }
      },
    }));
  }, []);

  useEffect(() => {
    onParentNavigate(location);
  }, [location.pathname]);

  return <div ref={ref} />;
};

export default AuthApp;
