import React from "react";
import loratadine from '../images/loratadine.jpg'

const Loratadine = () => {
    return (
        <div>
            <div className="image">
                <img src={loratadine} alt="pic" />
            </div>

            <div className="loratadine">
                <div className="loratadine_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Temporary remove symptoms of fever
                                </li>
                                <li>Used to treat itching and redness caused by hives.
                                </li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="loratadine_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Loratadine is an antihistamine used to relieve symptoms of allergies such as sneezing, runny or itchy nose, and itchy or watery eyes. It is commonly prescribed for seasonal allergies (hay fever) and chronic urticaria (hives). Loratadine works by blocking histamine, a substance in the body that causes allergic reactions. It is usually available in tablet, liquid, and dissolvable forms and is known for causing minimal drowsiness compared to other antihistamines.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loratadine