import React from "react";
import aspirin from '../images/aspirin.jpg'

const Aspirin = () => {
    return (
        <div>
            <div>
                <img src={aspirin} alt="" />
            </div>

            <div className="aspirin_info">
                <div className="aspirin_uses">
                    <table border={'1px'}>
                        <tr>
                            <td>Uses</td>
                            <td>
                                <li>To reduce fever</li>
                                <li>To get relive from muscle pain, toothache and headaches.</li>
                                <li>To reduce swelling</li>
                            </td>
                        </tr>
                    </table>
                </div>
                <h2>Description</h2>
                <div style={{width:'60vw',textAlign:'center'}}>
                Aspirin is a type of nonsteroidal anti-inflammatory drug (NSAID) that can treat mild to moderate pain, inflammation or arthritis. It also lowers your risk of heart attack, stroke or blood clot.It works by blocking a certain natural substance in your body to reduce pain and swelling.
                </div>

            </div>
        </div>
    )
}

export default Aspirin