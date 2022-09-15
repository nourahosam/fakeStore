import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ProductList } from './Components/ProductsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Product } from './Components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
