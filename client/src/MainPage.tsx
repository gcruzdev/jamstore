import React from 'react';
import Slide from './Components/Slide';
import ProductsDisplay from './Components/ProductsDisplay';

export default function MainPage() {
  return (
    <div className="App">
      <Slide />
      <ProductsDisplay />
    </div>
  );
}