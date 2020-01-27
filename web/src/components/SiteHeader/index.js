import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';

function SiteHeader({ book }) {
    return (
        
            <div className="site-topo">
                <div className="site-nome">
                    <Link to="/">Loja de <span>Livros</span></Link>
                </div>
                <div className="site-carrinho">
                    <Link to="/cart">carrinho</Link>
                </div>
            </div>
           
    );
}

export default SiteHeader;