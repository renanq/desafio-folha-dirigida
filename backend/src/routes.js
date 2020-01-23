const { Router } = require('express');
const BookController = require('./controllers/BookController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

//rota para a Listagem de livors
routes.get('/books', BookController.index);

//rota para Cadastro de livros
routes.post('/books', BookController.store);

//rota para detalhes do livro
routes.get('/search', SearchController.index);

module.exports = routes;