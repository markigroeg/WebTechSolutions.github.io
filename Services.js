import React from 'react';
import './styles.css';

function Services() {
  return (
    <div>
      <h2>Our Services</h2>
      <ul>
        <li>Consulting</li>
        <li>Responsive Design</li>
        <li>User Experience</li>
        {/* More services */}
      </ul>
      <a href="/services">See all our services</a>
    </div>
  );
}

export default Services;
