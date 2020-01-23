const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    nome: String,
    preco: Number,
    autor: String,
    autor_bio: String,
    categoria: String,
    sinopse: String,
    editora: String,
    capa_url: String,
});

module.exports = mongoose.model('Book', BookSchema);