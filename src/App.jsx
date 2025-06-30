
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WhatsAppButton from './components/WhatsAppButton';
import SimpleChatBot from './components/SimpleChatBot';
import FloatingWidget from './components/FloatingWidget';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
         
      </Routes>
      
      <WhatsAppButton />
      <SimpleChatBot />
       <FloatingWidget /> 
       
      <Footer />
      
    </>
  );
}

export default App;
