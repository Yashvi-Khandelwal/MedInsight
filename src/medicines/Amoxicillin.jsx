import React from "react";
import amoxicillion from '../images/amoxicillin.jpg'

const Amoxicillin = () => {
    return(
        <div>
            <div className="image">
                <img src={amoxicillion} alt="pic" />
            </div>

            <div className="amoxicillin_info">
                <div className="amoxicillin_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Treats bacterial infections such as pneumonia, bronchitis, infections of the ears, nose, throat, skin, and urinary tract.
                                </li>
                                <li>To treat stomach ulcers</li>
                                <li>Often prescribed for children, to treat ear infections and chest infections</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="amoxicillin_description">
                    <h2>Description</h2>
                    <div style={{width:'60vw',textAlign:'center'}}>
                    Amoxicillin is used to treat a wide variety of bacterial infections. It works by stopping the growth of bacteria.This antibiotic treats only bacterial infections. It will not work for viral infections. It works by inhibiting the synthesis of bacterial cell walls.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amoxicillin