import React from 'react';
import './HomePage.css';

const HomePage = () => {
  const products = [
    { name: 'Midnight Roast', desc: 'Bold & intense dark roast', price: '$18' },
    { name: 'Golden Hour', desc: 'Smooth medium blend', price: '$16' },
    { name: 'Dawn Awakening', desc: 'Bright light roast', price: '$15' }
  ];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="line-1">Where Coffee Meets</span>
            <span className="line-2">Comfort</span>
          </h1>
          <p className="hero-subtitle">
            Premium coffee, curated bookshelves, and a space designed for focus and relaxation
          </p>
          <button className="cta-button">Reserve Your Spot</button>
        </div>
        <div className="hero-decoration">
          <div className="coffee-steam steam-1"></div>
          <div className="coffee-steam steam-2"></div>
          <div className="coffee-steam steam-3"></div>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Signature Blends</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-icon">☕</div>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <span className="price">{product.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;