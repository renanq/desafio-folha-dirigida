import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import './styles.css';

function SiteHeader( { qtd }) {
  
    useEffect(() => {
      

    }, [qtd]);

    //apaga o carrinho criado da sessão e do banco de dados
    window.addEventListener("beforeunload", (e) => 
    {  
        e.preventDefault();

        const id = sessionStorage.getItem("@rqbookstore/cartid");
        sessionStorage.removeItem("@rqbookstore/cartid");
        api.delete(`/cart/${id}`);
    
    });

    return (
        
            <div className="site-topo">
                <div className="site-nome">
                    <Link to="/">Loja de <span>Livros</span></Link>
                </div>
                <div className="site-carrinho">
                    <Link to="/cart"><FontAwesomeIcon icon={ faShoppingCart } /></Link>
                    <span className="carrinho-qtd">{ qtd }</span>
                </div>
            </div>
           
    );
}

export default SiteHeader;