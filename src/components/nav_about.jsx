import React from 'react';
import './about.css';// Optional: for styling
import '../components/Home.css';
import '../components/Nav_Medicine.css';
import { Link } from 'react-router-dom';

const About = () => {
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
        {/* <div>
          <SearchIcon />
          <input type="text" placeholder="search" name="search" />
        </div> */}
      </div>
      <div className="about-container">
      <h1>About MedInsight</h1>
      <p>
        Welcome to MedInsight! Our project aims to solve the common problem of identifying the purpose of medications by just reading their names. Many people often find themselves with multiple drugs at home, unsure of their usage, which can lead to confusion and potential health risks. MedInsight is here to address this issue by providing a comprehensive and intuitive platform that helps users understand the uses of their medications, ensuring better patient care and safety.
      </p>
      <h3>Objectives</h3>
      <ul>
        <li><strong>Purpose Identification:</strong> Display the purpose of the medicine based on its name and photo.</li>
        <li><strong>Search Functionality:</strong> Allow users to search for the name of a medicine and identify its purpose.</li>
        <li><strong>Centralized Platform:</strong> Provide a wide range of medicines with their purposes and photos in one place.</li>
        <li><strong>User-Friendly:</strong> Ensure the platform is responsive and easy to use.</li>
        <li><strong>Sustainable Development:</strong> Focus on long-term usability and maintainability.</li>
      </ul>
      <h2>Technologies Used</h2>
      <ul>
        <li><strong>Front-end Development:</strong> React</li>
        <li><strong>Cloud:</strong> Google Drive</li>
      </ul>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Intuitive Interface:</strong> Simple and clear user interface.</li>
        <li><strong>Educational Resources:</strong> Provide detailed drug information, including uses, dosages, and side effects.</li>
        <li><strong>Detailed Drug Information:</strong> Comprehensive details on each medicine.</li>
      </ul>
      <h2>Methodology</h2>
      <p>
        To implement MedInsight, we started by developing a simple React frontend where users can input medicine names. We then built a search API using .NET to handle queries and retrieve relevant information from a database created from our data sources, including pharmaceutical companies, medical literature, and healthcare providers. The API processes these queries, analyzes drug names, and returns detailed information about their uses, dosages, and side effects. Our frontend displays this information clearly and intuitively, incorporating visual aids and educational resources to enhance user understanding. We also ensure that the system is secure, mobile-friendly, and easy to navigate.
      </p>
      <h2>Outcome</h2>
      <ul>
        <li>Users can search for medicines by name.</li>
        <li>Provides detailed information about each medicine, including uses, side effects, dosage, and precautions.</li>
        <li>User-friendly and responsive interface for ease of use across devices.</li>
        <li>Option to save medicines for future reference.</li>
        <li>Efficient performance under high load conditions.</li>
        <li>Secure database to protect user data and ensure data integrity.</li>
        <li>Regular updates and maintenance for security and functionality, including information about the latest diseases and their treatments.</li>
        <li>Accurate identification and display of medicine purposes based on name and other details.</li>
        <li>Comprehensive, centralized database with extensive medicine information.</li>
        <li>Continuous improvement through performance monitoring, error handling, and user feedback integration.</li>
      </ul>
      <h2>Contact</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at [your contact information].
      </p>
    </div>
    </div>
    
  );
}

export default About;
