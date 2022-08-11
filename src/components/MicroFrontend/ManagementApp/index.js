import React, { useRef, useEffect, useContext } from "react";
import { mount } from "management/ManagementApp";
import { useLocation, UNSAFE_NavigationContext } from "react-router-dom";

const ManagementApp = () => {
  console.log("----- MANAGEMENT APP CALL ----");
  const ref = useRef(null);
  const location = useLocation();
  const { navigator } = useContext(UNSAFE_NavigationContext);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = location;
        if (nextPathname !== pathname) {
          navigator.push(nextPathname);
        }
      },
    });

    navigator.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default ManagementApp;
