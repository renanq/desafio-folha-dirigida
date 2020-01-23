const { Router } = require('express');
const BookController = require('./controllers/BookController');
const SearchController = require('./controllers/SearchController');
const CartController = require('./controllers/CartController');

const routes = Router();

//rota para a Listagem de livors
routes.get('/books', BookController.index);

//rota para Cadastro de livros
routes.post('/books', BookController.store);

//rota para detalhes do livro
routes.get('/search', SearchController.index);

//rota para Criar o carrinho (Cart)
routes.post('/cart', CartController.store);

//rota para detalhes do carrinho (Cart)
routes.get('/cart/:id', CartController.index);

//rota para alterar o carrinho (Cart)
routes.put('/cart/', CartController.edit);

//rota para excluir o carrinho (Cart)
routes.delete('/cart/:id', CartController.delete);

module.exports = routes;