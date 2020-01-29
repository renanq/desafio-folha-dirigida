import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function SiteHeader( { qtd }) {
  
    useEffect(() => {
      

    }, [qtd]);

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