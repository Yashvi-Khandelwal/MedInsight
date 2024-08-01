import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../components/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h2>MedInsight</h2>
        </div>
        <div>
          <nav><Link to="/">Home</Link></nav>
          <nav><Link to="/about">About</Link></nav>
          <nav><Link to="/medicine">Medicine</Link></nav>
        </div>
        <div>
          <SearchIcon />
          <input type="text" placeholder="search" name="search" />
        </div>
      </div>
      <div className="background">
        <b style={{ fontSize: '56px', color: 'green' }}>MedInsight</b>
        <div style={{ color: 'black' }}>
          A platform where you will be getting all the information<br />
          regarding the medicines with its uses.
        </div>
      </div>
    </div>
  );
}

export default Home;
