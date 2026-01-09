const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Predefined responses
const responses = {
    "hello": "Hello! How can I help you today?",
    "hi": "Hi! How can I support you?",
    "price": "Our pricing depends on your package. Would you like details?",
    "help": "Sure! Tell me what you need help with.",
    "services": "We offer multiple services. Which one do you want?"
};

// Chatbot logic
app.post("/", (req, res) => {
    const userMsg = req.body.message?.toLowerCase() || "";

    // Check predefined patterns
    for (const key in responses) {
        if (userMsg.includes(key)) {
            return res.json({ reply: responses[key] });
        }
    }

    // Default fallback
    return res.json({
        reply: "I'm not sure about that yet, but I'm learning! 😊"
    });
});

exports.chatbot = functions.https.onRequest(app);
