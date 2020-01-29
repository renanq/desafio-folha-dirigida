import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './styles.css';


function BookDetail({ book }) {


    return (
        <div id="livro">
            <div id="acoes">
                <img src={book.capa_url} alt={book.nome} />
                <button type="submit"><FontAwesomeIcon icon={ faShoppingCart } /> Adicionar ao Carrinho</button>
                <a href="javascript: history.go(-1)" ><FontAwesomeIcon icon={ faArrowCircleLeft } /> Voltar</a>
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