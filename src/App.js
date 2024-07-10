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
          <img src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg" alt="Logo" />
         <div className='ssc bg-warning'> <span>ShopCart</span></div>
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
