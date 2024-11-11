import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <button style={{
        color: 'White', 
        background: 'grey',
        border: '3px',
        alignItems:'right',
        width: '70px',
        height: '30px'
      }} onClick={() => navigate(-1)}>Go back</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </>
  );
}

function NotFound() {
  return <h2>Page Not Found</h2>;
}

export default App;
