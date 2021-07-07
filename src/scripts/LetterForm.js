//we want to compile all the answers and POST to our database and GET it to put on our database

import { sendLetterRequest } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        //Need to grab the values of our form
        const theAuthorIndex = document.getElementById("authorDrop").options.selectedIndex //finding index id of element first
        const selectedAuthor = document.getElementById('authorDrop').options[theAuthorIndex].text
        const authorEmail = document.getElementById('authorDrop').options[theAuthorIndex].value
        const authorName = selectedAuthor + ' (' + authorEmail + ")"

        const letterArea = document.querySelector("input[name='letterArea']").value

        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
        const checkboxData = Array.from(checkboxes).map(checkboxButton => checkboxButton.value)


        const theRecipientIndex = document.getElementById("recipientDrop").options.selectedIndex
        const selectedRecipient = document.getElementById('recipientDrop').options[theRecipientIndex].text
        const recipientEmail = document.getElementById('recipientDrop').options[theRecipientIndex].value
        const recipientName = selectedRecipient + ' (' + recipientEmail + ")"

        const dateInput = new Date().toLocaleDateString()



        

        //make an object to POST 
        const datatoSend = {
            selectedAuthor: authorName,
            letterArea: letterArea,
            selectedRecipient: selectedRecipient,
            checkbox: checkboxData,
            date: dateInput,
            selectedRecipient: recipientName
        
        }
        //Invoke a function that posts the data
        sendLetterRequest(datatoSend)
    }
})
//so I have this posting the requests now.




//I want this to show on the page
export const LetterForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="authorDrop">Author<label> <br>
    <select name="authorDrop" id="authorDrop">
        <option value="not" disabled selected> Choose Author</option>
        <option value="tayari (tayari@gmail.com)">Tayari Jones</option> 
        <option value="paulo (paulo@gmail.com)">Paulo Coelho</option> 
        <option value="gucci (gucci@gmail.com)">Gucci Mane</option> 
        <option value="maya (maya@gmail.com)">Maya Angelou</option>
    </select> 
    </div>
    
    <div class="field">
        <label class="label" for="letterArea">Letter</label> <br>
        <input type="text" name="letterArea" class="input" />
    </div>
    
    <div class="field>
        <label class="label" for="business">Topics</label> <br>
        <input type="checkbox" class="radio_button" id="business" name="topic_button" value="business">
        <label for="business_button">Business</label>
        
        <input type="checkbox" class="radio_button" id="friendly" name="topic_button" value="friendly">
        <label for="friendly_button">Friendly</label>
        
        <input type="checkbox" class="radio_buton" id="family" name="topic_button" value="family">
        <label for="family_button">Family</label>
        
        <input type="checkbox" class="radio_button" id="congratulations" name="topic_button" value="congratulations">
        <label for="congratulations_button">Congratulations</label>
        
        <input type="checkbox"class="radio_button" id="condolences" name="topic_button" value="condolences">
        <label for="condolences_button">Condolences</label>
    </div>

    <div class="field">
        <label class="label" for="recipientDrop">Recipient<label> <br>
    <select name="recipientDrop" id="recipientDrop">
        <option value="not" disabled selected> Choose Recipient</option>
        <option value="patrice (patrice@gmail.com)">Patrice Gaines</option> 
        <option value="eckhart (eckhart@gmail.com)">Eckhart Tolle</option> 
        <option value="ichiro (ichiro@gmail.com)">Ichiro Kishimi</option> 
        <option value="tupac (tupac@gmail.com">Tupac Shakur</option>
    </select> 
    </div>

    <button class="button" id="sendLetter">Send Letter</button>
    
    `

    return html

}