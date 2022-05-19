import { getColors, getInteriors, getTechnologies, getWheels, getCustomCars} from "./database.js";

const buildOrderListItem = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const technologies = getTechnologies()
    const wheels = getWheels()
    const customCars = getCustomCars()

    const foundColor = colors.find(
        (color) => {
            return color.id === order.paintsId
        }
    )

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )

    const foundTechnologies = technologies.find(
        (technology) => {
            return technology.id === order.technologiesId
        }
    )

    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelsId
        }
    )

    const totalCost = foundColor.price + foundInterior.price + foundTechnologies.price + foundWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
        return `<li>
        Order #${order.id} costs ${costString}
        </li>`
}


export const Orders = () => {

    const orders = getCustomCars()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}