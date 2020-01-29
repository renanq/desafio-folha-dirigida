import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function CartDetail({ subtotal , booksIds, onClick}) {
    const [books, setBooks] = useState([]);

    useEffect(() => {

        async function loadBooks(id) {
            //busca as informações do livro
            const response = await api.get(`/search?_id=${id}`);
            //junta o livro no array dos livros do carrinho
            setBooks(prevState => prevState.concat(response.data));         
        };
        
        //pra cada ID de livro armazenado no carrinho, é carregada a info do livro
        booksIds.forEach(element => {
            loadBooks(element);
        });

    }, [booksIds]);

    async function handleClick(id) {

        await onClick(id);
        await setBooks([]);
    }

    return (
        <div id="cart">
            <h1>Carrinho de Compras </h1> 
                {books.map(b =>(
                    <div id="livro" key={b._id}> 
                        <div id="detalhes">
                            <div className="nome">
                                <Link to={`/book/${b._id}`}>
                                    {b.nome}
                                </Link>
                            </div>
                            <button key={b._id} onClick={() => handleClick(b._id)}><FontAwesomeIcon icon={ faShoppingCart } /> Remover do Carrinho</button>
                        </div>
                        <div className="image">
                            <img src={b.capa_url} alt={b.nome} />
                        </div>
                        <div id="valor">
                            R${(b.preco*1).toFixed(2)}
                        </div>
                    </div>
                ))}
            <div className="subtotal">
                Subtotal:&nbsp;
                <strong>R${(subtotal*1).toFixed(2)}</strong>
            </div>
        </div>
           
    );
}
export default CartDetail;