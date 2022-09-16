import React from 'react';
import { Provider, useSelector } from 'react-redux';
import './App.css';
import { ProductList } from './Components/ProductsList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Product } from './Components/Product';
import { RootState } from './Services/store';
import { RequireAuth } from './Components/RequireAuth';

function App() {
  const state = useSelector((state: RootState) => state)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route element={<RequireAuth />}> */}
            <Route path='/product/:id' element={<Product />} />
            <Route path='*' element={<ProductList />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
