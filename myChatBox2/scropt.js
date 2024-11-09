const KEY = " "
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${KEY}`

const messageBox = document.getElementById("messageBox")
const userInput = document.getElementById("userInput")
const msgButton = document.getElementById("msgButton")

/*const createUserMessage = `<article class="message user is-success">
                <div class="message-header">
                    <p>USER</p>
                </div>
                <div class="message-body">
                    MESSAGE
                </div>
            </article>`

const aiMessage = `<article class="message is-warning">
                <div class="message-header">
                    <p>AI</p>
                </div>
                <div class="message-body">
                    MESSAGE
                </div>
            </article>`*/

const history = []

function createUserMessage(message){
    let part = {
        "role": "user",
        "parts":[{
            "text":message
        }]
    }
    history.push(part)

    return `<article class="message user is-success">
                <div class="message-header">
                    <p>USER</p>
                </div>
                <div class="message-body">
                    ${message}
                </div>
            </article>`
}

function createAIMessage(message){
    let part = {
        "role": "model",
        "parts":[{
            "text":message
        }]
    }
    history.push(part)

    return `<article class="message is-warning">
                <div class="message-header">
                    <p>AI</p>
                </div>
                <div class="message-body">
                    ${message}
                </div>
            </article>`
}

function updateUI(formattedMessage){
    messageBox.innerHTML += formattedMessage
}

function sendMessage(){
    //Get the question from the user
    const question = userInput.value
    const formattedMessage = createUserMessage(question)

    //Update UI with question
    updateUI(formattedMessage)

    // Send the question to the Gemini API

    // Get response

    // Update UI with response
}
msgButton.addEventListener("click",sendMessage)

function queryAI(prompt){
     
    const header = Headers({
        "Content-type": "application/json"
    })
}