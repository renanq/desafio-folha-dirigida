import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Book from './Book';
import Cart from './Cart';
import BookAdd from './BookAdd';
import Erro from './Erro';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter >
        <Route path="/" exact={true} component={App} />
        <Route path="/book/:id" component={Book} />
        <Route path="/add" component={BookAdd} />
        <Route path="/cart" component={Cart} />
        <Route path="/error/:message" component={Erro} />
    </BrowserRouter>
, document.getElementById('root'));
{
    document.title = "Loja de Livros - por Renan Queiroz";
};
