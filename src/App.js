import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import About from './About';  // Changed from AboutPage
import Services from './Services';  // Changed from ServicesPage
import Footer from './Footer';
import './App.css';

export default function CoffeeShopWebsite() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}