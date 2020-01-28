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
      //busca o ID do carrinho salvo na sessão
      const _id = sessionStorage.getItem("@rqbookstore/cartid");
      //chama a API que retorna o carrinho existente em banco e suas informações
      const response = await api.get(`/cart/${_id}`);
      setBooksIds(response.data.livros_id);//guarda IDs dos livros existentes no carrinho
      setSubtotal (response.data.subtotal);//guarda o valor subtotal do carrinho
    };

    loadCart();    
  }, []);

  return (   
    <div id="app">
      <SiteHeader />
      <main>
        <CartDetail subtotal={subtotal} booksIds={booksIds} />
      </main>
    </div>
  );
}
export default Cart;