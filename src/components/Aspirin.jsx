import React from "react";
import aspirin from '../images/aspirin.jpg'

const Aspirin = () => {
    return(
        <div>
            <div>
                <img src={aspirin} alt="" />
            </div>

            <div className="aspirin_info">
                <h2>Description</h2>
                
            </div>
        </div>
    )
}

export default Aspirin