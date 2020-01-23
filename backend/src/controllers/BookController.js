const axios = require('axios');
const Book = require('../models/Book');

module.exports = {

    //Listagem de Livros
    async index(request, response){
        const books = await Book.find();

        return response.json(books);
    },

    //Cadastro de Livros
    async store(request, response){
        const { nome, preco, autor, autor_bio, categoria, sinopse, editora, capa_url } = request.body;
        //verifica se ja existe o registro do livro no banco
        let book = await Book.findOne({ nome });
        //caso não exista, realiza o cadastro
        if (!book){

            book = await Book.create({
                nome,
                preco,
                autor,
                autor_bio,
                categoria,
                sinopse,
                editora,
                capa_url,
            })

        }

        return response.json(book);
    }
}