# DESAFIO DESENVOLVEDOR PLENO

Projeto criado para o desafio, referente a vaga de Desenvolvedor Pleno, da Folha Dirigida Online. Projeto consistia em criar uma loja de livros e controlar o carrinho de compras. Banco de Dados Mongoose e aplicação em React.

 ![](/assets/00-lista-livros.png)

 ![](/assets/01-cadastro-livro.png)

 ![](/assets/02-detalhe-livro.png)

 ![](/assets/03-detalhe-livro-carrinho.png)

 ![](/assets/04-carrinho-de-compras.png)

## AUTOR

* **Renan Queiroz** - [renanq](https://github.com/renanq)

## INSTALAÇÃO E CONFIGURAÇÃO

- Ter uma máquina com os itens abaixo instalados:
  [Yarn](https://legacy.yarnpkg.com/lang/en/)
  [Node.js](https://nodejs.org/)
  [React](https://pt-br.reactjs.org/)
- Baixar o repositorio criado no Github [desafio-folha-dirigida](https://github.com/renanq/desafio-folha-dirigida)
- Configurar no backend o caminho do banco de dados (já configurado corretamente)
  /backend/src/index.js
- Configurar, no backend, o caminho da aplicação WEB que consumir as APIs (está configurado http://localhost:3000)
  /backend/src/index.js
- Configurar no backend a porta que as APIs utilizarão (está configurada a porta 3333)
  /backend/src/index.js
- Configurar na aplicação WEB a URL do backend (está configurada para http://localhost:3333)
  /web/services/api.js 
- Startar o backend
  diretorio: /backend
  comando: yarn dev
- Startar a aplicação WEB
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
	"autor_bio": "Os livros de Lucinda Riley já foram traduzidos para 37 países e venderam mais de 20 milhões de exemplares em todo o mundo. Ela está na lista de autores mais vendidos do The Sunday Times e do The New York Times.",
	"categoria": "Romance",
	"sinopse": "Um romance intenso e inspirador, com personagens perfeitamente delineados. Woman's Own Posy Montague está prestes a completar 70 anos. Ela ainda vive na Admiral House, a mansão da família onde passou uma infância caçando borboletas com o pai e onde criou os próprios filhos. Porém, a casa está caindo aos pedaços e Posy sabe que chegou a hora de vendê-la.Em meio a essa angustiante decisão, ela precisa lidar com os dois filhos, tão diferentes entre si. Sam é um fracasso nos negócios e, a cada empresa falida, se torna um homem mais amargo. Já Nick, o mais novo, retorna de repente à Inglaterra depois de dez anos morando na Austrália, fugido de uma decepçãoo amorosa.Para completar, Posy reencontra Freddie, seu primeiro amor, que agora deseja explicar por que a abandonou cinquenta anos atrás. Ela reluta em acreditar nessa subita afeição, percebendo que ele tem um segredo devastador para revelar.Mesclando narrativas do presente e do passado, A sala das borboletas mais uma vez mostra a habilidade de Lucinda para criar uma saga familiar inesquecivel.",
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