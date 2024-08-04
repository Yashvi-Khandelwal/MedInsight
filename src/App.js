import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav_Medicine from './components/Nav_Medicine';
import About from './components/nav_about'
import './App.css';
import Aspirin from './medicines/Aspirin'
import Amoxicillin from './medicines/Amoxicillin'
import Cetirizine from './medicines/Cetirizine'
import Diazepam from './medicines/Diazepam'
import Dolo from './medicines/Dolo'
import Gabapentin from './medicines/Gabapentin'
import Ibuprofen from './medicines/Ibuprofen'
import Loratadine from './medicines/Loratadine'
import Metformin from './medicines/Metformin'
import Nise from './medicines/Nise'
import Omeprazole from './medicines/Omeprazole'
import Paracetamol from './medicines/Paracetamol'
import Ranitidine from './medicines/Ranitidine'
import Ridol from './medicines/Ridol'
import Simvastatin from './medicines/Simvastatin'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/medicine" element={<Nav_Medicine />} />
          <Route path="/amoxicillin" element={<Amoxicillin />} />
          <Route path="/aspirin" element={<Aspirin />} />
          <Route path="/cetirizine" element={<Cetirizine />} />
          <Route path="/diazepam" element={<Diazepam />} />
          <Route path="/dolo" element={<Dolo />} />
          <Route path="/gabapentin" element={<Gabapentin />} />
          <Route path="/ibuprofen" element={<Ibuprofen />} />
          <Route path="/loratadine" element={<Loratadine />} />
          <Route path="/metformin" element={<Metformin />} />
          <Route path="/nise" element={<Nise />} />
          <Route path="/omeprazole" element={<Omeprazole />} />
          <Route path="/paracetamol" element={<Paracetamol />} />
          <Route path="/ranitidine" element={<Ranitidine />} />
          <Route path="/ridol" element={<Ridol />} />
          <Route path="/simvastatin" element={<Simvastatin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;