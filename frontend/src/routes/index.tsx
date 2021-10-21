import React from "react";
import { Switch, Route } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import UpdateUser from "../pages/UpdateUser";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={CreateUser} />
      <Route path="/updateUser/:id" component={UpdateUser} />
    </Switch>
  );
};

export default Routes;
