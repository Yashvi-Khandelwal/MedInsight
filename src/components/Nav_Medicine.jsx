import React from "react";
import '../components/Home.css'
import SearchIcon from '@mui/icons-material/Search';


const Nav_Medicine = () => {
    return(
        <div>
            <div className="header">
                    <div>
                        <h2>MedInsight</h2>
                    </div>

                    <div>
                        <nav>Home</nav>
                        <nav>About</nav>
                        <nav>Medicine</nav>
                    </div>

                    <div>
                    <SearchIcon />
                    <input type="text" placeholder="search" name="search" />
                </div>
                </div>

                <div className="medicineList">
                    <a href="">Aspirin</a> <br />
                    <a href="">Amoxicillin</a> <br />
                    <a href="">Cetirizine</a> <br />
                    <a href="">Diazepam</a> <br />
                    <a href="">Dolo</a> <br />
                    <a href="">Gabapentin</a> <br />
                    <a href="">Ibuprofen</a> <br />
                    <a href="">Loratadine</a> <br />
                    <a href="">Metformin</a> <br />
                    <a href="">Nise</a> <br />
                    <a href="">Loratadine</a> <br />
                    <a href="">Omeprazole</a> <br />
                    <a href="">Paracetamol</a> <br />
                    <a href="">Ranitidine</a> <br />
                    <a href="">Ridol</a> <br />
                    <a href="">Simvastatin</a> <br />
                </div>
        </div>
    )
}

export default Nav_Medicine