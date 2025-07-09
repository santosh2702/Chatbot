# Simple Rule-Based Chatbot with Optional LLM Enhancements

A lightweight chatbot built with Node.js, Express, and a static HTML frontend. It uses hardcoded responses for user inputs and provides a paginated API to retrieve conversation logs. This guide also includes optional steps to enhance the chatbot with **LangChain** for conversational memory and **LlamaIndex** for retrieval-augmented generation (RAG) using Hugging Face’s free API, enabling broader and context-aware responses.

## Features
- Web-based chat UI with Tailwind CSS.
- Hardcoded responses for inputs like `hello`, `time`, `joke`.
- Conversation logs with IST timestamps, accessible via `/api/logs`.
- Pagination for logs (default: 100 per page).
- Gzip compression for efficient responses.
- Free deployment on Render.
- Optional: LangChain for conversation history and LlamaIndex for data-driven answers.

## Tech Stack
- **Backend**: Node.js, Express (rule-based); optional LangChain (Node.js), LlamaIndex (Python)
- **Frontend**: HTML, JavaScript, Tailwind CSS
- **Dependencies**: `express`, `cors`, `compression`; optional `dotenv`, `@langchain/community`, `@langchain/core`, `node-fetch`, Python, `llama-index`, `flask`

## Project Structure
