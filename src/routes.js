import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}
