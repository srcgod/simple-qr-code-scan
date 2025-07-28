import { Scanner, type IDetectedBarcode} from "@yudiel/react-qr-scanner"
import { useState } from "react"
import styles from './QrCodeScanner.module.css'
import { SCAN_DATA } from "../../constatns"

const QrScanner = () => {
    const [parseQrObj, setParseQrObj] = useState<string>()

    const scanHandler = (result: IDetectedBarcode[]) => {
        setParseQrObj(result[0].rawValue)

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]') as string[]; 
        const newData = [...prevData, result[0].rawValue]; 
        localStorage.setItem(SCAN_DATA, JSON.stringify(newData));
    } 
    const scanSettigns = {
        audio: false,
        finder: false,
    }

    const styleSettings = {
        container: {width: 350}
    }
    return (
        <div className={styles.container}>
            <Scanner 
                onScan={scanHandler}
                components={scanSettigns}
                styles={styleSettings}
            />
            <p className={styles.result}>{parseQrObj}</p>
            <p className={styles.result}>https://srcgod.com</p>
        </div>
    )
}

export default QrScanner