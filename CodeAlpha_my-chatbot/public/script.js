const sendBtn = document.getElementById("send-btn");
const chatWindow = document.getElementById("chat-window");
const userInput = document.getElementById("user-input");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message");
    msg.classList.add(sender === "user" ? "user-msg" : "bot-msg");
    msg.textContent = text;
    chatWindow.appendChild(msg);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, "user");
    userInput.value = "";

    try {
        const res = await fetch(
            "http://127.0.0.1:5001/chatbot-project-f609a/us-central1/chatbot",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: text })
            }
        );

        const data = await res.json();
        addMessage(data.reply, "bot");

    } catch (err) {
        console.error(err);
        addMessage("Error connecting to chatbot.", "bot");
    }
}
