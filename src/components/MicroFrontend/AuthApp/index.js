import React, { useRef, useEffect, useContext } from "react";
import { mount } from "auth/AuthApp";
import { useLocation, UNSAFE_NavigationContext } from "react-router-dom";

const AuthApp = () => {
  console.log("----- AUTH APP CALL ----");
  const ref = useRef(null);
  const location = useLocation();
  const { navigator } = useContext(UNSAFE_NavigationContext);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        if (nextPathname !== location.pathname) {
          navigator.push(nextPathname);
        }
      },
    });

    navigator.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
