import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../components/Home.css';
import { Link } from 'react-router-dom';
import '../components/Nav_Medicine.css';
import aspirinImage from '../images/aspirin.jpg';
import amoxicillinImage from '../images/amoxicillin.jpg';
import cetirizineImage from '../images/cetirizine.jpg';
import diazepamImage from '../images/diazepam.png';
import doloImage from '../images/dolo.jpeg';
import gabapentinImage from '../images/gabapentin.jpg';
import ibuprofenImage from '../images/ibuprofen.jpg';
import loratadineImage from '../images/loratadine.jpg';
import metforminImage from '../images/metformin.jpg';
import niseImage from '../images/nise.jpg';
import omeprazoleImage from '../images/omeprazole.jpg';
import paracetamolImage from '../images/paracetamol.jpg';
import ranitidineImage from '../images/ranitidine.jpg';
import ridolImage from '../images/ridol.jpg';
import simvastatinImage from '../images/simvastatin.jpg';

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
        <Link 
          to="/aspirin" 
          className="medicineLink"
          style={{ backgroundImage: `url(${aspirinImage})` }}
        >
          <div className="medicineImage" style={{ backgroundImage: `url(${aspirinImage})` }}></div>
          <div className="medicineName">Aspirin</div>
        </Link>
        <Link 
          to="/amoxicillin" 
          className="medicineLink"
          style={{ backgroundImage: `url(${amoxicillinImage})` }}
        >
          <div className="medicineImage" style={{ backgroundImage: `url(${amoxicillinImage})` }}></div>
          <div className="medicineName">Amoxicillin</div>
        </Link>
        <Link to="/cetirizine" className="medicineLink" style={{ backgroundImage: `url(${cetirizineImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${cetirizineImage})` }}></div>
          <div className="medicineName">Cetirizine</div>
        </Link>
        <Link to="/diazepam" className="medicineLink" style={{ backgroundImage: `url(${diazepamImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${diazepamImage})` }}></div>
          <div className="medicineName">Diazepam</div>
        </Link>
        <Link to="/dolo" className="medicineLink" style={{ backgroundImage: `url(${doloImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${doloImage})` }}></div>
          <div className="medicineName">Dolo</div>
        </Link>
        <Link to="/gabapentin" className="medicineLink" style={{ backgroundImage: `url(${gabapentinImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${gabapentinImage})` }}></div>
          <div className="medicineName">Gabapentin</div>
        </Link>
        <Link to="/ibuprofen" className="medicineLink" style={{ backgroundImage: `url(${ibuprofenImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${ibuprofenImage})` }}></div>
          <div className="medicineName">Ibuprofen</div>
        </Link>
        <Link to="/loratadine" className="medicineLink" style={{ backgroundImage: `url(${loratadineImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${loratadineImage})` }}></div>
          <div className="medicineName">Loratadine</div>
        </Link>
        <Link to="/metformin" className="medicineLink" style={{ backgroundImage: `url(${metforminImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${metforminImage})` }}></div>
          <div className="medicineName">Metformin</div>
        </Link>
        <Link to="/nise" className="medicineLink" style={{ backgroundImage: `url(${niseImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${niseImage})` }}></div>
          <div className="medicineName">Nise</div>
        </Link>
        <Link to="/omeprazole" className="medicineLink" style={{ backgroundImage: `url(${omeprazoleImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${omeprazoleImage})` }}></div>
          <div className="medicineName">Omeprazole</div>
        </Link>
        <Link to="/paracetamol" className="medicineLink" style={{ backgroundImage: `url(${paracetamolImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${paracetamolImage})` }}></div>
          <div className="medicineName">Paracetamol</div>
        </Link>
        <Link to="/ranitidine" className="medicineLink" style={{ backgroundImage: `url(${ranitidineImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${ranitidineImage})` }}></div>
          <div className="medicineName">Ranitidine</div>
        </Link>
        <Link to="/ridol" className="medicineLink" style={{ backgroundImage: `url(${ridolImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${ridolImage})` }}></div>
          <div className="medicineName">Ridol</div>
        </Link>
        <Link to="/simvastatin" className="medicineLink" style={{ backgroundImage: `url(${simvastatinImage})` }}>
          <div className="medicineImage" style={{ backgroundImage: `url(${simvastatinImage})` }}></div>
          <div className="medicineName">Simvastatin</div>
        </Link>
      </div>
    </div>
  );
}

export default Nav_Medicine;
