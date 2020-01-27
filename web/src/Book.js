import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';
import BookDetail from './components/BookDetail';

function Book() {
  const [book, setBook] = useState([]);
  let { id } = useParams();

  useEffect(() => {
      async function loadBook() {
        const response = await api.get(`/search?_id=${id}`);
  
        setBook(response.data);
      }
  
      loadBook();
    }, []);

  return (
      
    <div id="app">
      <SiteHeader />
      <main>
        {book.map(book => (
            <BookDetail key={book._id} book={book}/>
          ))}
      </main>
    </div>

  );

}

export default Book;