import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import ProductDetails from './pages/product/product-details';
import NewProduct from './pages/product/new-product';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route exact path='/products/new' component={NewProduct} />
      <Route path='/products/:id' component={ProductDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
