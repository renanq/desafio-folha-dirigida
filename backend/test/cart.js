var server = require("../src/index");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = require("should");
var request = require("request");
var Book = require("../src/models/Cart");
var expect = chai.expect;
chai.use(chaiHttp);

describe("Teste APIs de Carrinho de Compras", function(){
    var cartId;

    it("Cadastrar Carrinho", function(done){
        var NovoCarrinho = 
            {
                "livros_id": [],
                "subtotal": 0
            };

        chai.request(server)
            .post("/cart")
            .send(NovoCarrinho)
            .end(function(err, res, body){
                //sucesso na chamada
                expect(res.statusCode).to.equal(200);
                //tratando o retorno
                var _body = {};
                try{
                    _body = JSON.parse(body);
                }
                catch(e){
                    _body = {};
                }
                //retorna um unico registro, pois apenas um seria cadastrado
                expect(_body).to.have.lengthOf.equal(1);
                //se der sucesso retornará o ID do registro
                expect(_body).should.have.property("_id");
                cartId = _body._id;
            });
        done();
    });

    it("Detalhe do Carrinho Cadastrado", function(done){
        chai.request(server)
            .get("/cart/" + cartId)
            .end(function(err, res, body){
                //sucesso na chamada
                expect(res.statusCode).to.equal(200);
                //tratando o retorno
                var _body = {};
                try{
                    _body = JSON.parse(body);
                }
                catch(e){
                    _body = {};
                }
                //cadastro de carrinho inicial é feito com 0 no subtotal
                expect(_body.subtotal).to.equal(0);
        });
        done();
    });

    it("Alterar Carrinho Adicionando Livro", function(done){

        chai.request(server)
            .put("/cart/?_id=" + cartId + "&acao=adicionar&livro_id=5e29acfdf84c2710243c1a66")
            .end(function(err, res, body){
                //sucesso na chamada
                expect(res.statusCode).to.equal(200);
                //tratando o retorno
                var _body = {};
                try{
                    _body = JSON.parse(body);
                }
                catch(e){
                    _body = {};
                }
                //retorna um unico registro, pois apenas um seria alterado
                expect(_body).to.have.lengthOf.equal(1);
                //tem que retornar a propriedade subtotal
                expect(_body).should.have.property("subtotal");
                //deve ser de valor igual ao do livro adicionadp
                expect(_body.subtotal).to.equal(27.9);
            });
        done();
    });


    it("Alterar Carrinho Removendo Livro", function(done){
        chai.request(server)
        .put("/cart?_id=" + cartId + "&acao=remover&livro_id=5e29acfdf84c2710243c1a66")
        .end(function(err, res, body){
            //sucesso na chamada
            expect(res.statusCode).to.equal(200);
            //tratando o retorno
            var _body = {};
            try{
                _body = JSON.parse(body);
            }
            catch(e){
                _body = {};
            }
            //retorna um unico registro, pois apenas um seria alterado
            expect(_body).to.have.lengthOf.equal(1);
            //tem que retornar a propriedade subtotal
            expect(_body).should.have.property("subtotal");
            //deve ser de valor igual ao do livro adicionadp
            expect(_body.subtotal).to.equal(0);
        });
        done();
    });

    it("Deletar Carrinho", function(done){
        chai.request(server)
            .delete("/cart/" + cartId)
            .end(function(err, res){
                //sucesso na chamada
                expect(res.statusCode).to.equal(200);
        });
        done();
    });
    
});