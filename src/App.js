import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './Auth';
import WelcomePage from './WelcomePage';
import Menu from './Menu';
import espressopic from './assets/images/espresso.jpg';
import capuchinopic from './assets/images/Cappuccino_at_Sightglass_Coffee.jpg';
import './Menu.css';


const App = () => {

  const menuItems = [
    {
      name: 'Espresso',
      imageUrl: espressopic,
      description: 'Espresso coffe'
    },
    {
      name: 'Capuchino',
      imageUrl: capuchinopic,      
      description: 'Delicios Cappuchino'
    },
  ];

  return (
    <div className="App">
      <nav className='nav'>
        <Link to="/" className='nav-item'>Welcome</Link>
        <Link to="/menu-page" className='nav-item'>Menu Items</Link>
      </nav>

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/menu-page" element={<Menu menuItems={menuItems}/>} />
        </Routes>
    </div>
  );
};

export default App;
