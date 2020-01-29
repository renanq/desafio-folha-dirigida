import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

function BookItem({ book , onClick, booksIds}) {

    async function handleClick(id, acao) {

        await onClick(id, acao);
    };

    return (
        <li  className="book-item">
            <header>
                <img src={book.capa_url} alt={book.nome} />
                <div className="book-info">
                    <strong>{book.nome}</strong>
                    <Link to={`/book/${book._id}`}>+Detalhes</Link>
                </div>
            </header>
            { booksIds.indexOf(book._id) === -1 &&
                <button id="bt-add" key={book._id} onClick={() => handleClick(book._id, "adicionar")}>
                    <FontAwesomeIcon icon={ faCartPlus } /> Adicionar ao Carrinho
                </button> }
            { booksIds.indexOf(book._id) !== -1 &&
                <button id="bt-remove" key={book._id} onClick={() => handleClick(book._id, "remover")}>
                    <FontAwesomeIcon icon={ faTrashAlt } /> Remover do Carrinho
            </button> }
        </li>
    );
}

export default BookItem;