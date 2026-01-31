import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '☕',
      title: 'Coffee Shop Experience',
      description: 'Visit our cozy café for expertly crafted espresso drinks, pour-overs, and cold brews.',
      features: ['Specialty espresso drinks', 'Single-origin pour-overs', 'Seasonal cold brews', 'Pastries & light bites'],
      large: true
    },
    {
      icon: '📦',
      title: 'Fresh Roasted Beans',
      description: 'Take home our freshly roasted beans. We roast small batches weekly to ensure peak flavor.',
      button: 'Shop Beans'
    },
    {
      icon: '🎓',
      title: 'Coffee Workshops',
      description: 'Learn the art of brewing from our expert roasters. Monthly classes for all skill levels.',
      button: 'Book a Class'
    },
    {
      icon: '🏢',
      title: 'Study Lounge Access',
      description: 'Premium seating, fast WiFi, and quiet zones for focused work or study sessions.',
      button: 'View Plans'
    },
    {
      icon: '🔄',
      title: 'Subscription Service',
      description: 'Never run out of great coffee. Get fresh beans delivered to your door monthly.',
      button: 'Subscribe Now'
    }
  ];

  return (
    <div className="page services-page">
      <section className="services-hero">
        <h1 className="page-title">Our Spaces & Services</h1>
        <p className="page-intro">
          Designed for your comfort and productivity
        </p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card card ${service.large ? 'large' : ''}`}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.features && (
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
            {service.button && (
              <button className="service-button">{service.button}</button>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Services;