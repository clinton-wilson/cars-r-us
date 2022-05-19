import { Colors } from "./paints.js"
import { Interiors } from "./interiors.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { Orders } from "./orders.js"
import { customCarOrder} from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id.startsWith("orderButton")) {
            customCarOrder()
        }
    }
)


export const carsRUs = () => {
    return `
        <h1>Cars R Us</h1>

        <article class="resources">
            <section class="resources__colors options">
                ${Colors()}
            </section>
            <section class="resources__interiors options">
                ${Interiors()}
            </section>
            <section class="resources__technologies options">
                ${Technologies()}
            </section>
            <section class="resources__wheels options">
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}