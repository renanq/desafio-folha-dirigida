const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    livros_id: [String],
    subtotal: Number
});

module.exports = mongoose.model('Cart', CartSchema);