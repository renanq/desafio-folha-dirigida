import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';
import BookDetail from './components/BookDetail';

function Book() {
  const [book, setBook] = useState([]);
  const [booksIds, setBooksIds] = useState([]);
  const [qtd, setQtd] = useState(0);
  const { id } = useParams();


  useEffect(() => {
      async function loadBook() {
        const response = await api.get(`/search?_id=${id}`);
  
        setBook(response.data);
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
      loadCart();  
      loadBook();
    }, [id, booksIds.length]);

    async function handleBook(idlivro, acao){
      const id = sessionStorage.getItem("@rqbookstore/cartid");
      const response = await api.put(`/cart?_id=${id}&acao=${acao}&livro_id=${idlivro}`)
      
      setBooksIds(response.data.livros_id);    
    }

  return (
      
    <div id="app">
      <SiteHeader qtd={qtd} />
      <main>
            <BookDetail key={book._id} book={book} booksIds={booksIds} onClick={handleBook} />
      </main>
    </div>

  );

}

export default Book;