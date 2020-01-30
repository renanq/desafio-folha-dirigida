# DESAFIO DESENVOLVEDOR PLENO

Projeto criado para o desafio, referente a vaga de Desenvolvedor Pleno, da Folha Dirigida Online.

## AUTOR

* **Renan Queiroz** - [renanq](https://github.com/renanq)

## INSTALAÇÃO E CONFIGURAÇÃO

- Ter uma m�quina com os itens abaixo instalados:
  [Yarn](https://legacy.yarnpkg.com/lang/en/)
  [Node.js](https://nodejs.org/)
  [React](https://pt-br.reactjs.org/)
- Baixar o repositorio criado no Github [desafio-folha-dirigida](https://github.com/renanq/desafio-folha-dirigida)
- Configurar no backend o caminho do banco de dados (j� configurado corretamente)
  /backend/src/index.js
- Configurar, no backend, o caminho da aplica��o WEB que consumr� as APIs (est� configurado http://localhost:3000)
  /backend/src/index.js
- Configurar no backend a porta que as APIs utilizar�o (est� configurada a porta 3333)
  /backend/src/index.js
- Configurar na aplica��o WEB a URL do backend (est� configurada para http://localhost:3333)
  /web/services/api.js 
- Startar o backend
  diretorio: /backend
  comando: yarn dev
- Startar a aplica��o WEB
  diretorio: /web
  comando: yarn start
   
## CONTROLE DE VERSÕES

- Git (local)
- Github (online)

## TESTES AUTOMATIZADOS

- Mocha

## TESTES MANUAIS

- Utilizado o software [Insomnia](https://insomnia.rest/)

## BANCO DE DADOS

- MongoDB (base cadastrada na [WEB](https://cloud.mongodb.com/)

## BACKEND

- Tecnologia: NodeJS

### DEPENDÊNCIAS

- Express
- Mongoose
- Nodemon
- Cors
- Mocha
- Chai
- Chai-http

### APIs Desenvolvidas

- Listagem de Livros
  GET /books
  Retorna nome, preco, capa_url de todos os livros cadastrados no banco de dados

- Cadastro de Livros
  cadastra um livro no banco de dados
  POST /books
  {
	"nome": "A Sala Das Borboletas",
	"preco": 38.49,
	"autor": "Lucinda Riley",
	"autor_bio": "Os livros de Lucinda Riley j� foram traduzidos para 37 pa�ses e venderam mais de 20 milh�es de exemplares em todo o mundo. Ela est� na lista de autores mais vendidos do The Sunday Times e do The New York Times.",
	"categoria": "Romance",
	"sinopse": "Um romance intenso e inspirador, com personagens perfeitamente delineados. � Woman�s Own Posy Montague est� prestes a completar 70 anos. Ela ainda vive na Admiral House, a mans�o da fam�lia onde passou uma inf�ncia id�lica ca�ando borboletas com o pai e onde criou os pr�prios filhos. Por�m, a casa est� caindo aos peda�os e Posy sabe que chegou a hora de vend�-la.Em meio a essa angustiante decis�o, ela precisa lidar com os dois filhos, t�o diferentes entre si. Sam � um fracasso nos neg�cios e, a cada empresa falida, se torna um homem mais amargo. J� Nick, o mais novo, retorna de repente � Inglaterra depois de dez anos morando na Austr�lia, fugido de uma decep��o amorosa.Para completar, Posy reencontra Freddie, seu primeiro amor, que agora deseja explicar por que a abandonou cinquenta anos atr�s. Ela reluta em acreditar nessa s�bita afei��o, percebendo que ele tem um segredo devastador para revelar.Mesclando narrativas do presente e do passado, A sala das borboletas mais uma vez mostra a habilidade de Lucinda para criar uma saga familiar inesquec�vel.",
	"editora": "Arqueiro",
	"capa_url": "http://lojasaraiva.vteximg.com.br/arquivos/ids/12117368/1009410607.jpg?v=637142278884400000"
}

- Detalhes do livro
  traz as informações do banco de dados, de um livro, através do id
  GET /search?_id=5e29acfdf84c2710243c1a66

- Cadastro de Cart (Carrinho de Compras)
  cria um carrinho de compras no banco de dados
  POST /cart
  {
	"livros_id": null,
	"subtotal": null
  }

- Detalhes do Cart
  retorna os detalhes do carrinho cadastrado no banco, através de um id
  GET http://localhost:3333/cart/5e29f79655685f23ac22b444

- Deletar Cart
  Exclui, do banco de dados, o carrinho de determinado id 
  DELETE http://localhost:3333/cart/5e29f79655685f23ac22b444

- Alterar Cart
  Adiciona ou remove itens de um determinado carrinho cadastrado no banco de dados, atraves do id e atualiza o subtotal
  Adiciona: PUT http://localhost:3333/cart?_id=5e2a0ad76e5a1d1ee861dfde&acao=adicionar&livro_id=5e29acfdf84c2710243c1a66
  Remove: PUT http://localhost:3333/cart?_id=5e2a0ad76e5a1d1ee861dfde&acao=remover&livro_id=5e29acfdf84c2710243c1a66


## WEB

- Tecnologia: React

### DEPENDÊNCIAS

- Axios
- Cors
- React-Router-Dom
- @fortawesome/free-solid-svg-icons
- @fortawesome/fontawesome-svg-core
- @fortawesome/react-fontawesome

### PÁGINAS DESENVOLVIDAS

- Lista de Livros
  URL: /

- Cadastro de Livros
  URL: /add

- Detalhes de Livros
  URL: /book/<id do livro>

- Carrinho de Compras
  URL: /cart

- Página de Erro
  URL: /error/<message>