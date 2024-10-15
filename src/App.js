import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/Home';
import Haqqimizda from './pages/Haqqimizda/Haqqimizda';
import Elaqe from './pages/Elaqe/Elaqe.js';
import Navbar from './components/Navbar/Navbar.js';
import MailFooter from './components/MailFooter/MailFooter.js';
import Reserved from './components/Reserved/reserved.js';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/haqqimizda" element={<Haqqimizda />} />
        <Route path="/contact" element={<Elaqe />} />
      </Routes>
      <MailFooter />
      <Reserved />
    </Router>
  );
}

export default App;
