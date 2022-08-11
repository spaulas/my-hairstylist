import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const ManagementLazy = lazy(() => import("../../components/ManagementApp"));
const AuthLazy = lazy(() => import("../../components/AuthApp"));

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/auth" component={AuthLazy} />
        <Route path="/" component={ManagementLazy} />
      </Switch>
    </Suspense>
  );
};

export default Routing;
