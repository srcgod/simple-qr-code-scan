import { GENERATE_DATA } from "../constatns";

const GenerateHistory = () => {
    const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
    return (
        <div>
            { data.map((text: string) =>(
                <p>{text}</p>
            ))}
        </div>
    )
}
export default GenerateHistory;