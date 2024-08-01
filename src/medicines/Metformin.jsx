import React from "react";
import metformin from '../images/metformin.jpg'

const Metformin = () => {
    return (
        <div>
            <div className="image">
                <img src={metformin} alt="pic" />
            </div>

            <div className="metformin">
                <div className="metformin_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Helps control blood sugar levels in people with type 2 diabetes
                                </li>
                                <li>Increases the body's sensitivity to insulin.
                                </li>
                                <li> Can aid in weight loss or prevent weight gain in some individuals with type 2 diabetes.</li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="metformin_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                    Metformin is an oral medication used to manage type 2 diabetes. It helps control blood sugar levels by improving the body’s response to insulin and reducing glucose production in the liver. Metformin is often used alongside diet and exercise to help achieve optimal blood glucose control. It is usually available in tablet and liquid forms and is known for its effectiveness and relatively low risk of causing low blood sugar (hypoglycemia).
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metformin