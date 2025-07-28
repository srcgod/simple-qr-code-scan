import { QRCodeSVG } from "qrcode.react"
import { SCAN_DATA } from "../constatns"

const ScanHistory = () => {
    const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
    
    return (
        <div>
            {data.map((text: string) => (
                <p> 
                    {text}
                    <QRCodeSVG value={text}/>
                </p>
            )) }
        </div>
    )
}

export default ScanHistory