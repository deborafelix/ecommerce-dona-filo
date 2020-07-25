import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsRoute from './ProductsRoute';
import ItemRoute from './ItemRoute';
import CartRoute from './CartRoute';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <ProductsRoute />
        </Route>

        <Route path="/item">
            <ItemRoute />
        </Route>

        <Route path="/cart">
            <CartRoute />
        </Route>

    </Switch>
);

export default Routes;