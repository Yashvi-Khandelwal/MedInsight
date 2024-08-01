import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../components/Home.css';
import aspirin from '../medicines/Aspirin'
import { Link } from 'react-router-dom';

const Nav_Medicine = () => {
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
      <div className="medicineList">
        <Link to="/aspirin">aspirin</Link><br />
        <Link to="/amoxicillin">Amoxicillin</Link><br />
        <Link to="/cetirizine">Cetirizine</Link><br />
        <Link to="/diazepam">Diazepam</Link><br />
        <Link to="/dolo">Dolo</Link><br />
        <Link to="/gabapentin">Gabapentin</Link><br />
        <Link to="/ibuprofen">Ibuprofen</Link><br />
        <Link to="/loratadine">Loratadine</Link><br />
        <Link to="/metformin">Metformin</Link><br />
        <Link to="/nise">Nise</Link><br />
        <Link to="/omeprazole">Omeprazole</Link><br />
        <Link to="/paracetamol">Paracetamol</Link><br />
        <Link to="/ranitidine">Ranitidine</Link><br />
        <Link to="/ridol">Ridol</Link><br />
        <Link to="/simvastatin">Simvastatin</Link><br />
      </div>
    </div>
  );
}

export default Nav_Medicine;
