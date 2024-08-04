import React from 'react';
import '../components/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <h2>MedInsight</h2>
        </div>

        <div className='navbar'>
          <nav><Link to="/" style={{textDecoration:'none'}}>Home</Link></nav>
          <nav><Link to="/about" style={{textDecoration:'none'}}>About</Link></nav>
          <nav><Link to="/medicine" style={{textDecoration:'none'}}>Medicine</Link></nav>
        </div>
      </div>
      
      <div className="background">
        <div className='content'>
          <h2>Welcome to MedInsight</h2>
          <p>
            Your trusted source for comprehensive information on medications and their uses.
          </p>
          <p>
            Whether you are a healthcare professional, a patient, or simply curious about a specific medication, MedInsight provides you with detailed and reliable information to make informed decisions.
          </p>
          <p>
            Explore our platform to:
          </p>
          <ul>
            <li>Learn about various medications and their therapeutic uses.</li>
            <li>Understand potential side effects and interactions.</li>
            <li>Stay updated with the latest medical research and news.</li>
          </ul>
          <p>
            Empower yourself with knowledge and take control of your health with MedInsight.
          </p>
        </div>
      </div>
    </div>
  );
   
}



export default Home;
