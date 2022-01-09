import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
console.log(Route);

const Hatspage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/hats' element={<Hatspage />} />
      </Routes>
    </div>
  );
}

export default App;
