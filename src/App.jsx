import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Tambahkan Navbar di sini */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <Footer /> {/* Tambahkan Footer di sini */}
    </BrowserRouter>
  );
}

export default App;
