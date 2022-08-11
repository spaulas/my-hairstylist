import React, { lazy, Suspense } from "react";
import { Route, useLocation, Routes } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const ManagementLazy = lazy(() =>
  import("../../components/MicroFrontend/ManagementApp/index")
);
const AuthLazy = lazy(() =>
  import("../../components/MicroFrontend/AuthApp/index")
);

const Routing = () => {
  const location = useLocation();
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<div>THIS IS THE CONTAINER!</div>} />
        {/*  <Route path="/" element={<ManagementLazy />}></Route>
        <Route path="/pricing" element={<ManagementLazy />}></Route>
        <Route path="/auth" element={<AuthLazy />}>
          <Route path="sign-in" element={<AuthLazy />} />
          {/* TODO find how to do this * /}
        </Route> */}
      </Routes>
    </Suspense>
  );
};

export default Routing;
