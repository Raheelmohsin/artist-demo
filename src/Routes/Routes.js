import React, { lazy, useEffect } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter as Router
} from "react-router-dom";
import Dashboard from "../Components/Views/Dashboard";
import ArtistDetail from "../Components/Views/ArtistDetail";

const NotFound = () => <p> Not found</p>;

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/ArtistDetail" render={() => <ArtistDetail />} />
        <Route exact path="/" render={() => <Dashboard />} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
