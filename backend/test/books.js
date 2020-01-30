var server = require("../src/index");
var chai = require("chai");
var chaiHttp = require("chai-http");
var should = require("should");
var request = require("request");
var Book = require("../src/models/Book");
var expect = chai.expect;
chai.use(chaiHttp);

describe("Teste APIs de Livro", function(){

    it("Lista de Livros", function(done){
        chai.request(server)
            .get("/books")
            .end(function(err, res){
                //sucesso na chamada e retorno da lista
                expect(res.statusCode).to.equal(200);
        });
        done();
    });

    it("Detalhe do Livro pelo ID: Retorna o Livro Existente", function(done){
        chai.request(server)
            .get("/search?_id=5e29acfdf84c2710243c1a66")
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
                done();
        });
        done();
    });
    
    it("Cadastrar Livro Único", function(done){
        var NovoLivro = {
            "nome": "Novo Livro",
            "preco": 34.90,
            "autor": "Ana Paula Garcia",
            "autor_bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in libero augue. Phasellus dui ex, hendrerit nec interdum vel, posuere sit amet risus.",
            "categoria": "Direito",
            "sinopse": "O presente livro traz solução completa em matéria de preparação para o Exame da OAB por meio de resolução de questões, trazem todas as questões do Exame Unificado, e ainda uma bateria de questões extras de outros exames da FGV e OAB não unificado. Assim, o examinando estuda pelo estilo de questões do Exame de Ordem e também pelo estilo de questões da FGV. Entender os dois estilos é muito importante, pois cada tipo de exame (no caso, o Exame de Ordem) e cada banca examinadora (no caso, a FGV) têm características próprias em relação aos seguintes aspectos: a) maneira de apresentar as perguntas, b) técnicas utilizadas para dificultar a resolução das questões, c) teses jurídicas preferidas, d) tipo de doutrina utilizada e e) temas preferidos, recorrentes e reputados mais importantes. A experiência diz que aquele que quer ser aprovado deve cumprir três objetivos: a) entender a teoria; b) ler a letra da lei, e c) treinar. A teoria é vista em cursos e livros à disposição do candidato no mercado. O problema é que este, normalmente, para nessa providência. A leitura da lei e o treinamento acabam sendo deixados de lado. E é nesse ponto que está o grande erro. Em média, mais de 90% das questões são respondidas a partir do texto da lei. Além disso, as questões de prova se repetem muito.",
            "editora": "Editora Foco",
            "capa_url": "http://lojasaraiva.vteximg.com.br/arquivos/ids/12117217/1009216722.jpg?v=637142278289500000"
        };

        chai.request(server)
            .post("/books")
            .send(NovoLivro)
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
            });
        done();
    });

    it("Cadastrar Livro Com Título Já Cadastrado", function(done){
        var NovoLivro = {
            "nome": "Novo Livro",
            "preco": 34.90,
            "autor": "Ana Paula Garcia",
            "autor_bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in libero augue. Phasellus dui ex, hendrerit nec interdum vel, posuere sit amet risus.",
            "categoria": "Direito",
            "sinopse": "O presente livro traz solução completa em matéria de preparação para o Exame da OAB por meio de resolução de questões, trazem todas as questões do Exame Unificado, e ainda uma bateria de questões extras de outros exames da FGV e OAB não unificado. Assim, o examinando estuda pelo estilo de questões do Exame de Ordem e também pelo estilo de questões da FGV. Entender os dois estilos é muito importante, pois cada tipo de exame (no caso, o Exame de Ordem) e cada banca examinadora (no caso, a FGV) têm características próprias em relação aos seguintes aspectos: a) maneira de apresentar as perguntas, b) técnicas utilizadas para dificultar a resolução das questões, c) teses jurídicas preferidas, d) tipo de doutrina utilizada e e) temas preferidos, recorrentes e reputados mais importantes. A experiência diz que aquele que quer ser aprovado deve cumprir três objetivos: a) entender a teoria; b) ler a letra da lei, e c) treinar. A teoria é vista em cursos e livros à disposição do candidato no mercado. O problema é que este, normalmente, para nessa providência. A leitura da lei e o treinamento acabam sendo deixados de lado. E é nesse ponto que está o grande erro. Em média, mais de 90% das questões são respondidas a partir do texto da lei. Além disso, as questões de prova se repetem muito.",
            "editora": "Editora Foco",
            "capa_url": "http://lojasaraiva.vteximg.com.br/arquivos/ids/12117217/1009216722.jpg?v=637142278289500000"
        };

        chai.request(server)
            .post("/books")
            .send(NovoLivro)
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
                //tem que retornar a propriedade code, já que daria erro
                expect(_body).should.have.property("code");
                //deve ser codigo 202 referente a duplicidade de título no banco de dados
                expect(_body.code).to.equal(202);
            });
        done();
    });
    
});