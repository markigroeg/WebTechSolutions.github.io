import React from 'react';
import './styles.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

function HomePage() {
  return (
    <div>
      <h1>Welcome to WebTechSolutions</h1>
      <Services />
      <Testimonials />
      {/* Other homepage components */}
    </div>
  );
}

export default HomePage;
