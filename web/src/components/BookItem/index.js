import React from 'react';
import './styles.css';

function BookItem({ book }) {
    return (
        <li  className="book-item">
            <header>
                <img src={book.capa_url} alt={book.nome} />
                <div className="book-info">
                    <strong>{book.nome}</strong>
                    <a href={`/book?bookid=${book._id}`}>+Detalhes</a>
                </div>
            </header>
            <button type="submit">Adicionar ao Carrinho</button>
        </li>
    );
}

export default BookItem;