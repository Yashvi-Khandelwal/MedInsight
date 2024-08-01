import React from "react";
import ranitidine from '../images/ranitidine.jpg'

const Ranitidine = () => {
    return (
        <div>
            <div className="image">
                <img src={ranitidine} alt="pic" />
            </div>

            <div className="ranitidine">
                <div className="ranitidine_uses">
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

                <div className="ranitidine_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                        Ranitidine is a medication used to reduce stomach acid production. It is commonly prescribed for conditions such as gastroesophageal reflux disease (GERD), peptic ulcers, and Zollinger-Ellison syndrome. Ranitidine works by blocking histamine H2 receptors in the stomach, which decreases the amount of acid produced. It is typically available in tablet, liquid, and injectable forms. Note that ranitidine has been withdrawn from many markets due to concerns about contamination with a potential carcinogen.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranitidine