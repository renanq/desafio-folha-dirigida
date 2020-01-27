import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import BookItem from './components/BookItem';
import SiteHeader from './components/SiteHeader';

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data);
    }

    loadBooks();
  }, []);

  return (
      
    <div id="app">
      <SiteHeader />
      <main>
        <ul>
          {books.map(book => (
            <BookItem key={book._id} book={book}/>
          ))}
        </ul>
      </main>
    </div>

  );

}

export default App;