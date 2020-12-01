import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from "./pages/Register";
import Products from "./pages/Products"

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/register" component={Register} />
      <Route path="/products" component={Products} />
    </Switch>
  );
}
