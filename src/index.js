import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Shipping from "./components/auth/shipping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Root = () => (
  <Router>
    <div>
        <Route path="/" component={App} />
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/shipping" component={Shipping} />
        </Switch>
    </div>
  </Router>

);

ReactDOM.render(<Root />, document.getElementById("root"));
