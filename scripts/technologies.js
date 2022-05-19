import { getTechnologies, setTechnologies } from "./database.js";

const technologies = getTechnologies()

export const Technologies = () => {
    return `<h2>Technologies</h2>
        <select id="tech">
            <option value="0">Select a technology package</option>
            ${
                technologies.map(
                    (tech) => {
                        return `<option value="${tech.id}">${tech.package}</option>`
                    }
                ).join("")
            }
        </select>
    `
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTechnologies(parseInt(event.target.value))
        }
    }
)