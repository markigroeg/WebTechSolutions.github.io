import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactUsPage} />
      </Switch>
    </Router>
  );
}

export default App;