import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "../components/login";
import MainPage from "../components/mainpage";
import Register from "../components/register";

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
         
          <Route path="/register" component={Register}>
          </Route>
          <Route path="/mainpage" component={MainPage}>
          </Route>
          <Route path="*" component={Login}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
