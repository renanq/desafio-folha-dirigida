const Cart = require('../models/Cart');
const Book = require('../models/Book');
const BookController = require('./BookController');

module.exports = {
    //detalhes do carrinho de compras (Cart) cadastrado no banco de dados
    async index(request, response){
        const _id = request.params.id;
        const cart = await Cart.findOne({ _id });
        return response.json(cart);
    },

    //Criar o carrinho de compras (Cart) no banco de dados
    async store(request, response){
        const { livros_id, subtotal } = request.body;
        //realiza o cadastro no banco
        cart = await Cart.create(
            {
                livros_id,
                subtotal,
            }
        )
        //retorna o carrinho cadastrado
        return response.json(cart);
    },

    //Atualizar o carrinho de compras (cart) no banco de dados
    async edit(request, response){
        const { acao, _id, livro_id} = request.query;
        let result;
        //encontra o carrinho que deve ser alterado
        let cart = await Cart.findOne({ _id });
        //a variavel recebe o array do banco
        let livros = cart.livros_id;
        //verifica se é pra adicionar ou remover o livro
        if (acao == "adicionar"){
            //se o carrinho já possuir algum livro (array com itens)
            if (livros != null){
                //adiciona o livro no array
                livros.push(livro_id);
            //se o carrinho não tiver livros (nulo)
            }else{
                livros = livro_id;
            }
            //altera o carrinho, no banco de dados, adicionando o array de livros (ids)
            result = await Cart.updateOne({ _id }, { livros_id: livros });
        }

        if (acao == "remover"){
            if(livros != null){
                livros.splice(livros.lastIndexOf(livro_id), 1);
                //altera o carrinho, no banco de dados, adicionando o array de livros (ids)
                result = await Cart.updateOne({ _id }, { livros_id: livros });
            }
        }

        //calculando subtotal (varre o array dos ids dos livros no carrinho
        //soma o valor de cada livro do carrinho e guarda no banco)
        livros = cart.livros_id;
        let subtotal = 0;
        for (let index = 0; index < livros.length; index++) {
            var qtd = livros.length;
            var valor = new Promise(function(resolve, reject) {
                resolve(
                    //traz o preço do livro
                    BookController.preco({ _id: livros[index] })
                );
            });
            valor.then(function(value) {
                console.log('livro ' + qtd);
                console.log('valor do livro ' + value);
                //soma o valor no subtotal
                subtotal = subtotal + value;
                return qtd;
            }).then(async function(value){
                console.log('subtotal ' + subtotal);
                    //recebe o subtotal finalizado, grava no banco ajustando casas decimais
                    result = await Cart.updateOne({ _id }, { subtotal: subtotal.toFixed(2) });
                    return qtd;
            }).then(async function(value){
                qtd = qtd - 1;
                if (qtd == 0){
                    //busca novamente o carrinho atualizado e retorna 
                    cart = await Cart.findOne({ _id });
                    return response.json(cart);
                }
            });
        }//fim do For
    },

    //apagar o carrinho de compras (cart) do banco de dados
    async delete(request, response){
        const _id = request.params.id;
        const cart = await Cart.findOneAndRemove({ _id });
        return response.json(cart);
    },
}