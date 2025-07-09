Simple Rule-Based Chatbot
A lightweight chatbot built with Node.js, Express, and a static HTML frontend. It uses hardcoded responses for user inputs and provides a paginated API to retrieve conversation logs. Ideal for learning full-stack development without external API dependencies.
Features

Web-based chat UI with Tailwind CSS.
Hardcoded responses for inputs like hello, time, joke.
Conversation logs with UTC timestamps, accessible via /api/logs.
Pagination for logs (default: 100 per page).
Gzip compression for efficient responses.
Free deployment on Render.

Tech Stack

Backend: Node.js, Express
Frontend: HTML, JavaScript, Tailwind CSS
Dependencies: express, cors, compression

Project Structure
chatbot/
├── public/
│   └── index.html  # Chat UI and log fetching
├── server.js       # Backend with /api/chat and /api/logs
├── package.json    # Dependencies and scripts
├── README.md       # This file

Prerequisites

Node.js v18.20.4 or higher
Git for version control
GitHub account for Render deployment

Setup

Navigate to Project:
cd /Users/santoshkumar/Documents/Chatbot


Install Dependencies:
npm install express cors compression


Run Locally:
node server.js


Output: Server running on port 3000.
Visit: http://localhost:3000.



Testing

Chat Interface:

Open http://localhost:3000.
Test inputs:
hello → “Hey there! How can I assist you today?”
What time is it? → “It's currently 7/9/2025, 8:49:00 AM in IST!”
Tell me a joke → “Why did the computer go to art school? Because it wanted to learn how to draw a better 'byte'!”


Click “Fetch Logs” to view logs with pagination.


API Tests:

Chat: curl -X POST http://localhost:3000/api/chat -H "Content-Type: application/json" -d '{"message":"hello"}'
Logs: curl http://localhost:3000/api/logs?page=1&per_page=10



Sample Chats



Input
Response



hello
Hey there! How can I assist you today?


how are you
I'm just a bunch of code, but I'm doing great! How about you?


What is AI?
AI is artificial intelligence, like me! I can answer questions and chat with you.


What's the weather?
I can't check the weather, but I bet it's sunny somewhere! What's the weather like where you are?


What time is it?
It's currently 7/9/2025, 8:49:00 AM in IST!


Tell me a joke
Why did the computer go to art school? Because it wanted to learn how to draw a better 'byte'!


Who are you?
I'm your friendly chatbot, built to answer your questions with a dash of humor!


Help me
I'm here to help! Try asking about AI, the weather, a joke, or the time.


Thank you
You're welcome! Always happy to chat.


Goodbye
See you later! Have a great day!


Deploy on Render

Push to GitHub:
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/chatbot.git
git push -u origin main


Sign Up on Render:

Go to https://render.com, sign up with GitHub, verify email.


Create Web Service:

In https://dashboard.render.com, click “New” → “Web Service”.
Select chatbot repository.
Set:
Environment: Node
Build Command: npm install
Start Command: node server.js
Instance Type: Free


Click “Create Web Service”.


Access App:

Get URL (e.g., https://my-chatbot.onrender.com).
Test chats and logs. Note: Free tier spins down after 15 minutes (spin-up: ~1 minute).



Troubleshooting

Local Error: Cannot find module 'compression' → Run npm install compression.
404 Errors: Ensure server runs and index.html fetches http://localhost:3000/api/chat.
Render Fails: Check dashboard logs for dependency or command issues.
Timestamps: Chat time uses IST; logs use UTC. For IST logs, update server.js:timestamp: new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
