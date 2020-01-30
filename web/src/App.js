import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import BookItem from './components/BookItem';
import SiteHeader from './components/SiteHeader';

function App() {
  const [books, setBooks] = useState([]);
  const [booksIds, setBooksIds] = useState([]);
  const [qtd, setQtd] = useState(0);
  
  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');
      setBooks(response.data);
    };

    async function loadCart() {
      var response;
      // busca o ID do carrinho se existente na sessão
      let _id = sessionStorage.getItem("@rqbookstore/cartid");
      //se existir na sessão, ele busca no banco de dados
      if (_id !== null){
        response = await api.get(`/cart/${_id}`);
        setBooksIds(response.data.livros_id);
        setQtd(booksIds.length);
      //se não existir na sessão, cria no banco o carrinho e guarda o ID na sessão
      }else{
        response = await api.post("/cart/",(
            {
              "livros_id": [],
              "subtotal": 0
            }
          ));
        _id = response.data._id;
        sessionStorage.setItem("@rqbookstore/cartid", _id);
        setBooksIds(response.data.livros_id);
        setQtd(booksIds.length);
      } 
    };
    
    loadBooks();
    loadCart();

  }, [booksIds.length]);

  async function handleBook(idlivro, acao){
    const id = sessionStorage.getItem("@rqbookstore/cartid");
    const response = await api.put(`/cart?_id=${id}&acao=${acao}&livro_id=${idlivro}`)
    
    setBooksIds(response.data.livros_id);    
  }

  return (
    
    <div id="app">
      <SiteHeader qtd={qtd} />
      <main>
        <ul>
          {books.map(book => (
            <BookItem key={book._id} book={book} onClick={handleBook} booksIds={booksIds}/>
          ))}
        </ul>
      </main>
    </div>

  );

}

export default App;