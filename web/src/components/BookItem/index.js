import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function BookItem({ book }) {
    return (
        <li  className="book-item">
            <header>
                <img src={book.capa_url} alt={book.nome} />
                <div className="book-info">
                    <strong>{book.nome}</strong>
                    <Link to={`/book/${book._id}`}>+Detalhes</Link>
                </div>
            </header>
            <button type="submit"><FontAwesomeIcon icon={ faShoppingCart } /> Adicionar ao Carrinho</button>
        </li>
    );
}

export default BookItem;