import React from "react";
import omeprazole from '../images/omeprazole.jpg'

const Omeprazole = () => {
    return (
        <div>
            <div className="image">
                <img src={omeprazole} alt="pic" />
            </div>

            <div className="omeprazole">
                <div className="omeprazole_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Reduces stomach acid to help manage GERD symptoms.
                                </li>
                                <li>Promotes healing of stomach and duodenal ulcers by decreasing acid production.
                                </li>
                                <li> Manages excessive stomach acid production in this rare condition.</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="omeprazole_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Omeprazole is  used to treat conditions related to excessive stomach acid. It is commonly prescribed for gastroesophageal reflux disease (GERD), peptic ulcers, and Zollinger-Ellison syndrome. Omeprazole works by reducing the amount of acid produced in the stomach, which helps alleviate symptoms such as heartburn, acid reflux, and indigestion. It is usually available in capsule and tablet forms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Omeprazole