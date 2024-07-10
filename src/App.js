import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import './Styles.css';

const App = () => {
  return (
    <Router>
      <nav>
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFDjVb7hzKzgSlnNxOWxb_0i1S7jL5KSX-b5rYG6W88xaAerIgIP35GpBfMBM4riG-no&usqp=CAU" alt="Logo" />
         <div className='ssc bg-warning'> <span>E-Kart</span></div>
        </div>
        <ul>
          <li><Link to="/">Catalog</Link></li>
          <li><Link to="/registration">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
