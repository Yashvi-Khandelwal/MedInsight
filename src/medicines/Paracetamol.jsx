import React from "react";
import paracetamol from '../images/paracetamol.jpg'

const Paracetamol = () => {
    return (
        <div>
            <div className="image">
                <img src={paracetamol} alt="pic" />
            </div>

            <div className="paracetamol">
                <div className="paracetamol_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Effective for mild to moderate pain, such as headaches, muscle aches, and toothaches.
                                </li>
                                <li>Helps lower fever associated with various illnesses.
                                </li>
                                <li> Used for pain relief in osteoarthritis and other types of arthritis.</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="paracetamol_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Paracetamol, also known as acetaminophen, is a commonly used medication to relieve pain and reduce fever. It is effective for treating headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers. Paracetamol works by inhibiting the production of prostaglandins, chemicals in the body that cause pain and inflammation. It is typically available in tablet, capsule, and liquid forms and is generally well-tolerated when taken as directed.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Paracetamol