import React from "react";
import dolo from '../images/dolo.jpeg'

const Dolo = () => {
    return(
        <div>
            <div className="image">
                <img src={dolo} alt="pic" />
            </div>

            <div className="dolo">
                <div className="dolo_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Relieves mild to moderate pain such as headaches, toothaches, and backaches.
                                </li>
                                <li>Reduces fever</li>
                                <li>To get relieve from menstrual cramps</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="dolo_description">
                    <h2>Description</h2>
                    <div style={{width:'60vw',textAlign:'center'}}>
                    Dolo is a medication, commonly used to relieve pain and reduce fever. It is effective for treating headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. Dolo is typically available in tablet form and is known for its rapid onset of action and minimal side effects when taken as directed.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dolo