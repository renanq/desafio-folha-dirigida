import React from 'react';
import { Link } from 'react-router-dom'
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
            <button type="submit">Adicionar ao Carrinho</button>
        </li>
    );
}

export default BookItem;