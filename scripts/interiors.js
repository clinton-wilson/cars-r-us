import { getInteriors, setInteriors } from "./database.js";

const interiors = getInteriors()

export const Interiors = () => {
    return `<h2>Interiors</h2>
        <select id="interior">
            <option value="0">Select an interior package</option>
            ${
                interiors.map(
                    (interior) => {
                        return `<option value="${interior.id}">${interior.type}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInteriors(parseInt(event.target.value))        
        }
    }
)