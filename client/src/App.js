



import './App.css';
import React from 'react';
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer.jsx';


function App() {


  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </BrowserRouter>




  </>
  );
}

export default App;
