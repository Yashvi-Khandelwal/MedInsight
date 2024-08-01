import React from "react";
import gabapentin from '../images/gabapentin.jpg'

const Gabapentin = () => {
    return (
        <div>
            <div className="image">
                <img src={gabapentin} alt="pic" />
            </div>

            <div className="gabapentin">
                <div className="gabapentin_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Treats nerve pain from conditions like shingles and diabetic neuropathy.
                                </li>
                                <li>Used to manage seizures.
                                </li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="gabapentin_description">
                    <h2>Description</h2>
                    <div style={{ width: '60vw', textAlign: 'center' }}>
                        Gabapentin is a medication used to treat nerve pain and seizures. It is commonly prescribed for conditions such as neuropathic pain, which can result from diabetes, shingles (herpes zoster), and spinal cord injury. Gabapentin works by stabilizing electrical activity in the brain and affecting the way nerves send messages to the brain. It is usually available in capsule, tablet, and oral solution forms.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gabapentin