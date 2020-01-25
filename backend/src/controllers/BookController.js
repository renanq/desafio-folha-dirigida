const Book = require('../models/Book');

module.exports = {

    //retorna valor do livro cadastrado no banco
    async preco(request, response){
        const _id = request._id;
        const book = await Book.findOne({ _id }, "preco", function (err, docs) { });
        console.log('id do livro ' + _id);
        return book.preco;
    },
    
    //Listagem de Livros
    async index(request, response){
        const books = await Book.find({ }, "_id nome preco capa_url", function (err, docs) { });
        //retorna todos os livros encontrados
        return response.json(books);
    },

    //Cadastro de Livros
    async store(request, response){
        const { nome, preco, autor, autor_bio, categoria, sinopse, editora, capa_url } = request.body;
        //verifica se ja existe o registro do livro no banco
        let book = await Book.findOne({ nome });
        //caso não exista, realiza o cadastro no banco
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
            //retorna o livro cadastrado
            return response.json(book);
        }
        //se o livro já existir, retorna codigo de erro
        else{
            return response.json(
                {
                    code: 202, 
                    message: 'Não foi possível realizar o cadastro - Livro já existente.'
                }
            );
        }
    }
}