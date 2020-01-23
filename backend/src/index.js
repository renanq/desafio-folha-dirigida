const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');

const app = express();

//conexão com o banco de dados
mongoose.connect('mongodb+srv://folha:folha01@cluster0-2nfu3.mongodb.net/test?retryWrites=true&w=majority',  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

//Definindo a porta que será utilizada para as APIs
app.listen(3333);