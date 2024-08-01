import React from "react";
import simvastatin from '../images/simvastatin.jpg'

const Simvastatin = () => {
    return (
        <div>
            <div className="image">
                <img src={simvastatin} alt="pic" />
            </div>

            <div className="simvastatin">
                <div className="simvastatin_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Reduces the risk of heart attacks in individuals with a history of heart disease or at high risk.
                                </li>
                                <li>Lowers the risk of stroke by managing cholesterol levels
                                </li>
                                <li> Helps prevent cardiovascular events in patients with conditions such as coronary artery disease.</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="simvastatin_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Simvastatin is a medication used to lower cholesterol levels in the blood. It belongs to a class of drugs known as statins, which work by inhibiting an enzyme involved in the production of cholesterol in the liver. Lowering cholesterol helps reduce the risk of heart disease, stroke, and other cardiovascular issues. Simvastatin is commonly prescribed alongside diet and exercise changes and is available in tablet form.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simvastatin