import React, { useRef, useEffect } from "react";
import { mount } from "management/ManagementApp";
import { useLocation, useNavigate } from "react-router-dom";

const ManagementApp = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  let onParentNavigate = () => {};

  useEffect(() => {
    ({ onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (nextPathname !== pathname) {
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

export default ManagementApp;
