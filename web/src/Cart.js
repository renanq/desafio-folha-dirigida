import React from 'react';

import './global.css';
import './App.css';
import './Main.css';

import SiteHeader from './components/SiteHeader';
import BookDetail from './components/CartDetail';

function Cart() {

  return (
      
    <div id="app">
      <SiteHeader />
      <main>
        <BookDetail />
      </main>
    </div>

  );

}

export default Cart;