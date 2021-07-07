//import the current state of the requests dataAccess
import { getRequests } from "./dataAccess.js"

//export the list of requests that people made

export const requestLetter = () => {
    //Make our lists with our letters
    const requests = getRequests() //an array of objects

 

    let html = "<ul>"

    const listArray = requests.map(request => {
       
       return `<li> Dear ${request.selectedRecipient}, <br>
        ${request.letterArea} <br>
       Sincerely, <br>
       ${request.selectedAuthor} <br>
       ${request.checkbox} <br> sent on ${request.date}</li>`
    }
    ) 

    const stringOfArray = listArray.join('')
    html+= stringOfArray
    html += "</ul>"
    
    return html
}