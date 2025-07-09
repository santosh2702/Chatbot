const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");

const app = express();

// Mock conversation logs
let conversationLogs = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  userMessage: `User message ${i + 1}`,
  botResponse: `Bot response ${i + 1}`,
  timestamp: new Date(Date.now() - i * 60000).toISOString(),
}));

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(express.static(path.join(__dirname, "public")));

// Hardcoded responses for /api/chat
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  let reply = "I don't understand that yet! Try something else.";

  // Expanded hardcoded responses (case-insensitive)
  const lowerMessage = message.toLowerCase().trim();
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    reply = "Hey there! How can I assist you today?";
  } else if (lowerMessage.includes("how are you")) {
    reply = "I'm just a bunch of code, but I'm doing great! How about you?";
  } else if (lowerMessage.includes("what is ai")) {
    reply = "AI is artificial intelligence, like me! I can answer questions and chat with you.";
  } else if (lowerMessage.includes("bye") || lowerMessage.includes("goodbye")) {
    reply = "See you later! Have a great day!";
  } else if (lowerMessage.includes("weather")) {
    reply = "I can't check the weather, but I bet it's sunny somewhere! What's the weather like where you are?";
  } else if (lowerMessage.includes("time")) {
    reply = `It's currently ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} in IST!`;
  } else if (lowerMessage.includes("joke")) {
    reply = "Why did the computer go to art school? Because it wanted to learn how to draw a better 'byte'!";
  } else if (lowerMessage.includes("who are you")) {
    reply = "I'm your friendly chatbot, built to answer your questions with a dash of humor!";
  } else if (lowerMessage.includes("help")) {
    reply = "I'm here to help! Try asking about AI, the weather, a joke, or the time.";
  } else if (lowerMessage.includes("thank you") || lowerMessage.includes("thanks")) {
    reply = "You're welcome! Always happy to chat.";
  }

  // Store conversation log with timestamp
  const log = {
    id: conversationLogs.length + 1,
    userMessage: message,
    botResponse: reply,
    timestamp: new Date().toISOString(),
  };
  conversationLogs.push(log);

  res.json({ reply });
});

// GET /api/logs (Paginated conversation logs)
app.get("/api/logs", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.per_page) || 100;
  const start = (page - 1) * perPage;
  const end = start + perPage;

  if (page < 1 || perPage < 1) {
    return res.status(400).json({ error: "Invalid page or per_page parameters" });
  }

  const total = conversationLogs.length;
  const totalPages = Math.ceil(total / perPage);
  const logs = conversationLogs.slice(start, end);

  if (logs.length === 0 && page > 1) {
    return res.status(404).json({ error: "No more logs available" });
  }

  res.json({
    data: logs,
    meta: {
      page,
      per_page: perPage,
      total,
      total_pages: totalPages,
      next_page: page < totalPages ? page + 1 : null,
      prev_page: page > 1 ? page - 1 : null,
    },
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});