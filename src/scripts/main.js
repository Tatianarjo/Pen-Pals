import { PenPal } from "./PenPal.js"
import { getAllLetterRequests } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    getAllLetterRequests().then(
        () => {
         mainContainer.innerHTML = PenPal()
        }
    )
}

render ()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)

//lines 5-11 make the html of the page show the title when starting off