import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/userCrud/UserCrud";

export default function Routers(props) {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/users">
        <UserCrud />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
}
