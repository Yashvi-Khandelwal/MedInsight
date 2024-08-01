import React from "react";
import ridol from '../images/ridol.jpg'

const Ridol = () => {
    return (
        <div>
            <div className="image">
                <img src={ridol} alt="pic" />
            </div>

            <div className="ridol">
                <div className="ridol_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>

                                <li> Decreases the frequency of stools.
                                </li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="ridol_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>

                    Ridol is used to treat diarrhea by slowing down the movement of the intestines, which helps reduce the frequency and urgency of bowel movements. It works by affecting the opioid receptors in the gut to decrease peristalsis and increase the time it takes for stools to pass through the intestines. Loperamide is typically available in tablet and liquid forms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ridol