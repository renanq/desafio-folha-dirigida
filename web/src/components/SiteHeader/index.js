import React from 'react';
import './styles.css';

function SiteHeader({ book }) {
    return (
        
            <div className="site-topo">
                <div className="site-nome">
                    Loja de <span>Livros</span>
                </div>
                <div className="site-carrinho">
                    <a href={'/cart'}>carrinho</a>
                </div>
            </div>
           
    );
}

export default SiteHeader;