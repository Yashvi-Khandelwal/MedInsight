import React from "react";
import nise from '../images/nise.jpg'

const Nise = () => {
    return (
        <div>
            <div className="image">
                <img src={nise} alt="pic" />
            </div>

            <div className="nise">
                <div className="nise_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Effective for relieving mild to moderate pain, such as headaches, toothaches, and muscle pain.
                                </li>
                                <li>Reduces inflammation in conditions like arthritis or muscle injuries.
                                </li>
                                <li> Used to relieve pain and discomfort associated with menstrual cramps.</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="nise_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Nise is a  medication containing Nimesulide, which is a nonsteroidal anti-inflammatory drug (NSAID). It is used to relieve pain and reduce inflammation associated with conditions such as arthritis, menstrual cramps, and musculoskeletal pain. Nimesulide works by inhibiting the production of prostaglandins, which are chemicals in the body that cause pain and inflammation. It is typically available in tablet, suspension, and topical forms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nise