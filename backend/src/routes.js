const { Router } = require('express');
const BookController = require('./controllers/BookController');

const routes = Router();

//rota para a Listagem de livors
routes.get('/books', BookController.index);

//rota para Cadastro de livors
routes.post('/books', BookController.store);

module.exports = routes;