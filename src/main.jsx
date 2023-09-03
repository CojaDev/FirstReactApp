import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav.jsx';
import Header from './header.jsx';
import './style.css';
import './nav.css';
import './header.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Header />
  </React.StrictMode>
);
