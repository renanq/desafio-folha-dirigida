import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';
import CartDetail from './components/CartDetail';


function Cart() {
  const [booksIds, setBooksIds] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  
  useEffect(() => {

    async function loadCart() {
      var response;
      // busca o ID do carrinho se existente na sessão
      let _id = sessionStorage.getItem("@rqbookstore/cartid");
      //se existir na sessão, ele busca no banco de dados
      if (_id !== null){
        response = await api.get(`/cart/${_id}`);
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
      } 
      setBooksIds(response.data.livros_id);
      setSubtotal(response.data.subtotal);
    };

    loadCart();
    //loadCartItens();    
  }, []);

  async function handleRemoveBook(data){
    const id = sessionStorage.getItem("@rqbookstore/cartid");
    const response = await api.put(`/cart?_id=${id}&acao=remover&livro_id=${data}`)
    
    setBooksIds(response.data.livros_id);
    setSubtotal(response.data.subtotal);
    
  }

  return (   
    <div id="app">
      <SiteHeader qtd={booksIds.length} />
      <main>
        <CartDetail subtotal={subtotal} booksIds={booksIds} onClick={handleRemoveBook} />
      </main>
    </div>
  );
}
export default Cart;