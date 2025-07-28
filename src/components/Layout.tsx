// import QrCodeGenerator from "./QrCodeGenerate/QrCodeGenerator"

import { Route, Routes } from "react-router-dom"
import QrCodeGenerator from "./QrCodeGenerate/QrCodeGenerator"
import QrScanner from "./QrCodeScanner/QrCodeScanner"
import { Navigation } from "./Navigation/Navigation"
import ScanHistory from "./ScanHistory"
import GenerateHistory from "./GenerateHistory"

const Layout = () => {
    return (
        <div>
            <Navigation/>

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>}/>
                <Route path="/scan" element={<QrScanner/>}/>
                <Route path="/scanHistory" element={<ScanHistory/>}/>
                <Route path="/generateHistory" element={<GenerateHistory/>}/>
            </Routes>
        </div>
    )
}

export default Layout