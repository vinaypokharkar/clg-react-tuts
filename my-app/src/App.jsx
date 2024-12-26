import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Products' element={<Products/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
