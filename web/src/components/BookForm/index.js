import React, { useState } from 'react';
import './styles.css';

function BookForm({onSubmit}) {

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [autor, setAutor] = useState('');
    const [editora, setEditora] = useState('');
    const [categoria, setCategoria] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [autor_bio, setAutorBio] = useState('');
    const [capa_url, setCapaUrl] = useState('');
  
    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            nome,
            preco,
            autor,
            editora,
            categoria,
            sinopse,
            autor_bio,
            capa_url
        });

        //limpa o formulário
        setNome('');
        setPreco('');
        setAutor('');
        setEditora('');
        setCategoria('');
        setSinopse('');
        setAutorBio('');
        setCapaUrl('');
    }


    return (
        <div id="form-livro">
            <h1>Cadastro de Livros</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-block">
                    <label htmlFor="nome">Nome do Livro</label>
                    <input 
                    name="nome" 
                    id="nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required 
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="preco">Preço (Ex: 99.99)</label>
                    <input 
                    type="number"
                    name="preco" 
                    id="preco"
                    value={preco}
                    onChange={e => setPreco(e.target.value)} 
                    required 
                    />
                </div>
                
                <div className="input-block">
                    <label htmlFor="latitude">Autor</label>
                    <input 
                    name="autor" 
                    id="autor" 
                    value={autor} 
                    onChange={e => setAutor(e.target.value)}
                    required 
                    />
                </div>
                
                <div className="input-block">
                    <label htmlFor="editora">Editora</label>
                    <input 
                    name="editora" 
                    id="editora" 
                    value={editora} 
                    onChange={e => setEditora(e.target.value)}
                    required 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="categoria">Categoria</label>
                    <input 
                    name="categoria" 
                    id="categoria" 
                    value={categoria} 
                    onChange={e => setCategoria(e.target.value)}
                    required 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="capa_url">URL da Capa</label>
                    <input 
                    name="capa_url" 
                    id="capa_utl" 
                    value={capa_url} 
                    onChange={e => setCapaUrl(e.target.value)}
                    required 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="sinopse">Sinopse</label>
                    <input 
                    name="sinopse" 
                    id="sinopse" 
                    value={sinopse} 
                    onChange={e => setSinopse(e.target.value)}
                    required 
                    />
                </div>

                <div className="input-block">
                    <label htmlFor="sinopse">Sobre o Autor</label>
                    <input 
                    name="autor_bio" 
                    id="autor_bio" 
                    value={autor_bio} 
                    onChange={e => setAutorBio(e.target.value)}
                    required 
                    />
                </div>
                <div className="input-group">
                    <div className="input-block">
                        <a href="/" >Cancelar</a>
                    </div>
                    <div className="input-block">
                        <button type="submit">Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BookForm;