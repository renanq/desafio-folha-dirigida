const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

//conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://folha:folha01@cluster0-2nfu3.mongodb.net/test?retryWrites=true&w=majority',  { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//liberando o endereço da aplicação WEB para utilizar as APIs
app.use(cors( { origin: 'http://localhost:3000' }));

app.use(express.json());
app.use(routes);

//Definindo a porta que será utilizada para as APIs (ex: httpp://localhost:3333)
app.listen(3333);
