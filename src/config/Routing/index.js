import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";

const ManagementLazy = lazy(() =>
  import("../../components/MicroFrontend/ManagementApp/index")
);
const AuthLazy = lazy(() =>
  import("../../components/MicroFrontend/AuthApp/index")
);

const Routing = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<div>MAIN</div>}></Route>
        {["/clients", "/employees"].map((path, index) => (
          <Route
            path={path}
            key={`management_${index}`}
            element={<ManagementLazy />}
          />
        ))}
        {["/auth", "/auth/sign-in", "/auth/sign-up"].map((path, index) => (
          <Route path={path} key={`auth_${index}`} element={<AuthLazy />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routing;
