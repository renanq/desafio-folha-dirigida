import React from 'react';
import { useParams} from 'react-router-dom';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';


function Erro() {
    let { message } = useParams();

    return (
        
        <div id="app">
            <SiteHeader />
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