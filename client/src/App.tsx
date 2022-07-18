import React from 'react';
import Header from './Components/Header';
import Slide from './Components/Slide';
import './Assets/styles/global.css'
import ProductsDispaly from './Components/ProductsDisplay';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slide />
      <ProductsDispaly />
    </div>
  );
}

export default App;
