//asking the api for requests we'll write the fetch code here
//ask the api for requests (GET)

//POST a new requests; we want to add new data 
const applicationState = {
    requests: []
}
const mainContainer = document.querySelector("#container")

export const sendLetterRequest = (letterRequest) => {
    //include method, headers and body when I fetch for POST

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterRequest) //this is creating a json format of the letter data; converting javascript to json
    }
    return fetch(`http://localhost:3000/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

    })
}

export const getAllLetterRequests = () => {
    
   return fetch(`http://localhost:3000/requests`)
    .then(response => response.json())
    .then (letterRequests => {
        applicationState.requests = letterRequests
    })
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}
//I need to make stateChange event over here too because I'm wanting it to refresh
//Define mainContainer then use it for the 

//POST means we're adding to our database GET means we're getting something from it

//don't really undersstand 30 without the GET