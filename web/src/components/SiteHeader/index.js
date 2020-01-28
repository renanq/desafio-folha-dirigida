import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

function SiteHeader() {
    let [cart, setCart] = useState([]);
  
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
  
        setCart(response.data);
      }
  
      loadCart();
    }, []);

    return (
        
            <div className="site-topo">
                <div className="site-nome">
                    <Link to="/">Loja de <span>Livros</span></Link>
                </div>
                <div className="site-carrinho">
                    <Link to="/cart"><FontAwesomeIcon icon={ faShoppingCart } /></Link>
                    <span className="carrinho-qtd">99</span>
                </div>
            </div>
           
    );
}

export default SiteHeader;