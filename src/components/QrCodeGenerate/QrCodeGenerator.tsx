import { QRCodeSVG } from "qrcode.react"
import { useState } from "react"
import s from './QrCodeGenerator.module.css'
import { GENERATE_DATA } from "../../constatns"

const QrCodeGenerator = () => {
    const [qrCodeVal, setQrCodeVal] = useState('')
    const [resultQr, setResultQr] = useState('')

    const changeQrHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQrCodeVal(event.target.value)
        setResultQr('')
    }
    const onCLickHandler = (_: React.MouseEvent<HTMLButtonElement>) => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]') as string[]; 
        const newData = [...prevData, qrCodeVal]; 
        localStorage.setItem(GENERATE_DATA, JSON.stringify(newData));
        
        setResultQr(qrCodeVal)
        setQrCodeVal('')
        
    }
    return (
    <div>
        <div className={s.container}>
            
            <input className={s.input} type="text" value={qrCodeVal} onChange={changeQrHandler} placeholder="Enter ur data" />
            <button className={s.button} onClick={onCLickHandler}>Generate QR</button>
            {resultQr != '' && <QRCodeSVG value={resultQr} size={200} />}
        </div>
    </div>
        
    )
}
export default QrCodeGenerator