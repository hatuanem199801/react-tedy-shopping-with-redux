import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./container/Layout";
import Products from "./container/Products";
import Orders from "./container/Orders";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
