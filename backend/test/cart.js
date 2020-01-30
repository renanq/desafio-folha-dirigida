var server = require("../src/index");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = require("should");
var request = require("request");
var Book = require("../src/models/Cart");
var expect = chai.expect;
chai.use(chaiHttp);

describe("Teste APIs de Carrinho de Compras", function(){

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
                done();
            });
        done();
    });

    it("Detalhe do Carrinho Cadastrado", function(done){
        chai.request(server)
            //colocar Id de carrinho cadastrado no banco
            .get("/cart/" + "5e32d9615817244478ca19fd")
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
                //tem que retornar a propriedade subtotal se der certo
                expect(_body).should.have.property("subtotal");
                done();
        });
        done();
    });

    it("Alterar Carrinho Adicionando Livro", function(done){
        //colocar Id de carrinho cadastrado no banco
        chai.request(server)
            .put("/cart/?_id=" + "5e32d9615817244478ca19fd" + "&acao=adicionar&livro_id=5e29acfdf84c2710243c1a66")
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
                //tem que retornar a propriedade subtotal se der certo
                expect(_body).should.have.property("subtotal");
                done();
            });
        done();
    });

    it("Alterar Carrinho Removendo Livro", function(done){
        chai.request(server)
        //colocar Id do carrinho do teste anterior (para remover o livro adicionado)
        .put("/cart?_id=" + "5e32d9615817244478ca19fd" + "&acao=remover&livro_id=5e29acfdf84c2710243c1a66")
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
            //tem que retornar a propriedade subtotal
            expect(_body).should.have.property("subtotal");
            done();
        });
        done();
     });

    it("Deletar Carrinho", function(done){
        chai.request(server)
            //colocar id de carrinho existente em banco
            .delete("/cart/" + "5e32d9615817244478ca19fd")
            .end(function(err, res){
                //sucesso na remoção
                expect(res.statusCode).to.equal(200);
            });
        done();
    });
    
});