import { getColors, setPaints } from "./database.js";

const colors = getColors()

export const Colors = () => {
    return `<h2>Paints</h2>
        <select id="paint">
            <option value="0">Select a paint package</option>
            ${
                colors.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.color}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaints(parseInt(event.target.value))
        }
    }
)