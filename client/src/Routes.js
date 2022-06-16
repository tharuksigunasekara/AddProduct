import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/addproduct'>
        <AddProduct />
      </Route>
    </Switch>
  );
}
export default Routes;
