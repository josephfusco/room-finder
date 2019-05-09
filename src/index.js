import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import history from "./history";
import App from "containers/App";
import * as serviceWorker from "serviceWorker";

ReactDOM.render(
  <HashRouter history={history} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route
        exact
        strict
        path="/:url*"
        render={props => <Redirect to={`${props.location.pathname}/`} />}
      />
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
