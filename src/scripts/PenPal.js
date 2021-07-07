import { LetterForm } from "./LetterForm.js"
//import Requests
import { requestLetter } from "./Requests.js"
//event listener for the button click





export const PenPal = () => {
    return `
    <h1>Pen Pal Society</h1>
    <section class="letterForm">
        ${LetterForm()}
    </section>
    
    <section class="letterRequests">
    <h2>Send Letter</h2>
        ${requestLetter()}
   
    </section>

    </section>
    `
}