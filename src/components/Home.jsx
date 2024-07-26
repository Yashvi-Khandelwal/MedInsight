import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import '../components/Home.css'
// import hero_bg from '../Images/hero_bg.jpg'
import home_bg from '../images/home_bg.jpg'

const Home = () => {

    return(
        <div>
                <div className="header">
                    <div>
                        <h2>MedInsight</h2>
                    </div>

                    <div>
                        <nav>Home</nav>
                        <nav>About</nav>
                        <nav>Contact</nav>
                    </div>

                    <div>
                    <SearchIcon />
                    <input type="text" placeholder="search" name="search" />
                </div>
                </div>

<div className="background">
        <b style={{fontSize:'56px',color:'green'}}>MedInsight</b>
        <div style={{color:'black'}}>
            A platform where you will be getting all the information <br />
            regarding the medicines with it's uses.
        </div>
</div>
               
        </div>
    )
}

export default Home