import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Book from './Book';
import Cart from './Cart';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter >
        <Route path="/" exact={true} component={App} />
        <Route path="/book/:id" component={Book} />
        <Route path="/cart" component={Cart} />
    </BrowserRouter>
, document.getElementById('root'));
