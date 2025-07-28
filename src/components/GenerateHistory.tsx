import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../constatns";

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') 
    return (
        <div>
            { data.map((text: string) =>(
                <p>
                    {text}
                    <QRCodeSVG value={text} size={200}/>
                    </p>
            ))}
        </div>
    )
}
export default GenerateHistory;