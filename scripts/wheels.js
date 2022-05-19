import { getWheels, setWheels } from "./database.js";

const wheels = getWheels()

export const Wheels = () => {
    return `<h2>Wheels</h2>
        <select id="wheels">
            <option value="0">Select a wheel package</option>
            ${
                wheels.map(
                    (wheel) => {
                        return `<option value="${wheel.id}">${wheel.size}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)