import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import App from "containers/App";
import ReactGA from 'react-ga';
import * as serviceWorker from "serviceWorker";

ReactGA.initialize('UA-20627796-9');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
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
serviceWorker.register();
