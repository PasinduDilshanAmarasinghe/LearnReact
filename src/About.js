import React from 'react';
import './About.css';

const About = () => {
  const values = [
    { icon: '🌍', title: 'Sustainability', desc: 'Committed to eco-friendly practices from farm to cup' },
    { icon: '🤝', title: 'Fair Trade', desc: 'Direct relationships with farmers ensuring fair compensation' },
    { icon: '📚', title: 'Knowledge Hub', desc: 'Curated library and educational resources for all visitors' }
  ];

  return (
    <div className="page about-page">
      <section className="about-hero">
        <h1 className="page-title">Our Philosophy</h1>
        <p className="page-intro">
          Where every cup tells a story and every chair invites inspiration
        </p>
      </section>

      <section className="about-content">
        <div className="story-section">
          <div className="story-image">
            <div className="image-placeholder">📖</div>
          </div>
          <div className="story-text">
            <h2>More Than a Café</h2>
            <p>
              Founded in 2020, Brew & Books emerged from a passion for two things: 
              exceptional coffee and meaningful spaces. We believe great ideas are born 
              where comfort meets inspiration.
            </p>
            <p>
              Our space is designed to be a sanctuary for students, remote workers, 
              and creatives. With curated bookshelves, ergonomic seating, and quiet zones, 
              we've created an environment where productivity and relaxation coexist.
            </p>
          </div>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card card">
              <span className="value-icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;