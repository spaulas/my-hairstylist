import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import managementRoutes from "management/routes";
import authRoutes from "auth/routes";

const ManagementLazy = lazy(() =>
  import("../../components/MicroFrontend/ManagementApp/index")
);
const AuthLazy = lazy(() =>
  import("../../components/MicroFrontend/AuthApp/index")
);

const Routing = () => {
  console.log('authRoutes = ', authRoutes)
  console.log('managementRoutes = ', managementRoutes)
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<div>MAIN</div>}></Route>
        {managementRoutes.map((path, index) => (
          <Route
            path={path}
            key={`management_${index}`}
            element={<ManagementLazy />}
          />
        ))}
        {authRoutes.map((path, index) => (
          <Route path={path} key={`auth_${index}`} element={<AuthLazy />} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routing;
