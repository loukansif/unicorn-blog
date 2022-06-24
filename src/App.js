/* eslint-disable no-unused-vars */
import './App.css';
import Navbar from './components/Navbar';
import React, {useState, useEffect} from 'react';
import Articles from './components/Articles';
import Article from './components/Article';
import Gallery from './components/Gallery';
import Upload from './components/Upload';
import { Outlet, Routes, Route, Link} from 'react-router-dom';
import matriceLogo from '../src/assets/img/matriceLogo.png'

const App = () => {

  return (
    <div className="App">
      <div className="Header">
        <Link to="/">
          <img src={matriceLogo} className="logoMatrice" alt="Logo" />
        </Link>
        <nav className="HeaderLinks">
          <Link to="/upload">Upload</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;