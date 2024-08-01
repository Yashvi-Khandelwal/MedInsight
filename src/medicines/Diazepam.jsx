import React from "react";
import diazepam from '../images/diazepam.png'

const Diazepam = () => {
    return(
        <div>
            <div className="image">
                <img src={diazepam} alt="pic" />
            </div>

            <div className="diazepam">
                <div className="diazepam_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>Relieves allergy symptoms like runny nose, sneezing, and itching.
                                </li>
                                <li>Used for chronic urticaria (hives)
                                </li>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="diazepam_description">
                    <h2>Description</h2>
                    <div style={{width:'60vw',textAlign:'center'}}>
                    Cetirizine is used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching. It works by blocking a certain natural substance (histamine) that your body makes during an allergic reaction.Cetirizine does not prevent hives or prevent/treat a serious allergic reaction. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diazepam