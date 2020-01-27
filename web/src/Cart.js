import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './services/api';

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