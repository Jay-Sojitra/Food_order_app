import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';


function App() {
  return (
    <>
      <Router>
      
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          

         
        </Routes>
      </Router>
    </>
  );
}

export default App;
