import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCartPlus, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './styles.css';


function BookDetail({ book, booksIds, onClick}) {

    async function handleClick(id, acao) {

        await onClick(id, acao);
    };

    return (
        <div id="livro">
            <div id="acoes">
                <img src={book.capa_url} alt={book.nome} />
                { booksIds.indexOf(book._id) === -1 &&
                    <button id="bt-add" key={book._id} onClick={() => handleClick(book._id, "adicionar")}>
                        <FontAwesomeIcon icon={ faCartPlus } /> Adicionar ao Carrinho
                    </button> }
                { booksIds.indexOf(book._id) !== -1 &&
                    <button id="bt-remove" key={book._id} onClick={() => handleClick(book._id, "remover")}>
                        <FontAwesomeIcon icon={ faTrashAlt } /> Remover do Carrinho
                    </button> }
                <a href="javascript: history.go(-1);" ><FontAwesomeIcon icon={ faArrowCircleLeft } /> Voltar</a>
            </div>
            <div id="detalhes">
                <div className="nome">{book.nome}</div>
                <div className="preco">R$ {(book.preco*1).toFixed(2)}</div>
                <div className="autor"><span>Autor:</span> {book.autor}</div>
                <div className="editora"><span>Editora:</span> {book.editora}</div>
                <div className="categoria"><span>Categoria:</span> {book.categoria}</div>
                <div className="sinopse"><span>Sinopse:</span> {book.sinopse}</div>
                <div className="autor-bio"><span>Sobre o autor:</span> {book.autor_bio}</div>
            </div>
        </div>           
    );
}

export default BookDetail;