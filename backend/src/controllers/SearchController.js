const Book = require('../models/Book');

module.exports = {
    //Detalhes do livro, buscando pelo _id
    async index(request, response){
        const _id = request.query;
        const book = await Book.findOne({ _id });
        return response.json(book);
    },
}