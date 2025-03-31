const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function sendMessage() {
    let message = userInput.value.trim();
    if (!message) return;

    appendMessage("user", message);
    userInput.value = "";

    // Simulating bot response
    setTimeout(() => {
        appendMessage("bot", getBotResponse(message));
    }, 1000);
}

function appendMessage(sender, message) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I help?",
        "how are you": "I'm just a bot, but I'm doing great!",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[input.toLowerCase()] || "I'm not sure, but I can learn!";
}
