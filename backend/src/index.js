const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();
app.use(express.json());
app.use(routes);

//conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://folha:folha01@cluster0-2nfu3.mongodb.net/test?retryWrites=true&w=majority',  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Definindo a porta que será utilizada para as APIs
app.listen(3333);