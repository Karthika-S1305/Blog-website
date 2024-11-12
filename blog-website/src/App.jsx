// import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Write from './pages/Write';
import Expand  from './pages/Expand';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/write' element={<Write/>}/>
        <Route path='/expand' element={<Expand/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Contact/>
      </>
  );
}

function NotFound() {
  return <h2>Page Not Found</h2>;
}

export default App;
