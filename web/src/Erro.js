import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import api from './services/api';
import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';

function Erro() {
    let { message } = useParams();
    const [qtd, setQtd] = useState(0);
    const [booksIds, setBooksIds] = useState([]);

    useEffect(() => {
        async function loadCart() {
        var response;
        // busca o ID do carrinho se existente na sessão
        let _id = sessionStorage.getItem("@rqbookstore/cartid");
        //se existir na sessão, ele busca no banco de dados
        if (_id !== null){
            response = await api.get(`/cart/${_id}`);
            setBooksIds(response.data.livros_id);
            setQtd(booksIds.length);
        //se não existir na sessão, cria no banco o carrinho e guarda o ID na sessão
        }else{
            response = await api.post("/cart/",(
                {
                "livros_id": [],
                "subtotal": 0
                }
            ));
            _id = response.data._id;
            sessionStorage.setItem("@rqbookstore/cartid", _id);
            setBooksIds(response.data.livros_id);
            setQtd(booksIds.length);
        } 
        };

        loadCart();
    }, [booksIds.length]);

    return (
        
        <div id="app">
            <SiteHeader qtd={qtd} />
            <main>
                <div id="erro">
                    <p>{ message }</p>
                    <p><a href="javascript:history.go(-1)">Voltar</a></p>
                </div>
            </main>
        </div>

    );

}

export default Erro;