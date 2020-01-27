import React from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';
import BookForm from './components/BookForm';

function BookAdd() {

    async function handleAddBook(data){

        const response = await api.post('/books', data);
        if (response.data._id != undefined){
            const _id = response.data._id;
            window.location.href = "/book/" + _id;
        }
        else{
            const message = response.data.message;
            window.location.href = "/error/" + message;
        }
    
    }  

  return (
      
    <div id="app">
      <SiteHeader />
      <main>
        <BookForm onSubmit={handleAddBook} />
      </main>
    </div>

  );

}

export default BookAdd;