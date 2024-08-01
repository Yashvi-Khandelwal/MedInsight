import React from "react";
import ibuprofen from '../images/ibuprofen.jpg'

const Ibuprofen = () => {
    return (
        <div>
            <div className="image">
                <img src={ibuprofen} alt="pic" />
            </div>

            <div className="ibuprofen">
                <div className="ibuprofen_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Reduces pain, inflammation, and fever
                                </li>
                                <li>Used for conditions like arthritis, muscle pain, and menstrual cramps.
                                </li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="ibuprofen_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                        Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce inflammation, and lower fever. It is commonly used for headaches, muscle aches, menstrual cramps, arthritis, backaches, and toothaches. Ibuprofen works by inhibiting the production of prostaglandins, which are chemicals in the body that cause pain and inflammation. It is typically available in tablet, capsule, and liquid forms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ibuprofen