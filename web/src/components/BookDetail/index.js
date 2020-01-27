import React from 'react';
import { Switch, Route, useParams} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import './styles.css';


function BookDetail({ book }) {


    return (
        <div id="livro">
            <div id="acoes">
                <img src={book.capa_url} alt={book.nome} />
                <button type="submit"><FontAwesomeIcon icon={ faShoppingCart } /> Adicionar ao Carrinho</button>
                <a href="/" ><FontAwesomeIcon icon={ faArrowCircleLeft } /> Voltar</a>
            </div>
            <div id="detalhes">
                <div className="nome">{book.nome}</div>
                <div className="preco">R$ {book.preco.toFixed(2)}</div>
                <div className="autor"><span>Autor:</span> {book.autor}</div>
                <div className="categoria"><span>Categoria:</span> {book.categoria}</div>
                <div className="sinopse"><span>Sinopse:</span> {book.sinopse}</div>
                <div className="autor-bio"><span>Sobre o autor:</span> {book.autor_bio}</div>
            </div>
        </div>           
    );
}

export default BookDetail;