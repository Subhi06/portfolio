# Jawanexis Technologies Website

A single-folder full-stack website for Jawanexis Technologies built with React, Tailwind CSS, Framer Motion, Node.js, and Express.

## Tech Stack

Frontend:
- React.js
- Tailwind CSS
- Framer Motion
- Axios
- React Router

Backend:
- Node.js
- Express.js
- CORS
- File-based JSON persistence for contact submissions

## Project Structure

project-root/

- public/
- src/
  - components/
  - pages/
  - App.jsx
  - main.jsx
- routes/
- controllers/
- models/
- data/
- server.js
- index.html
- package.json
- vite.config.js
- tailwind.config.js
- postcss.config.js

## Features Included

- Responsive monochrome agency UI
- Component-based React architecture
- Framer Motion section animations
- Home, About, Services, Projects, and Contact pages
- Contact form integrated with backend via Axios
- REST API endpoint for contact submissions
- Contact data saved to a JSON file
- Single-folder project setup with one package.json

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

```bash
copy .env.example .env
```

### 3) Run everything

```bash
npm run dev
```

The dev launcher starts Vite and then starts the backend on the first available port beginning at `5001`. It also wires Vite's `/api` proxy to that chosen backend port automatically.

For production or standalone backend runs, the Express server still defaults to `http://localhost:5000` unless you set `PORT`.

If you want to run only the backend in development, use `npm run dev:server`. That script defaults to port `5001`.

## API Endpoints

- GET `/api/health`
- POST `/api/contact`
- GET `/api/contact`

### Example contact payload

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Company Name",
  "message": "We need a modern website and dashboard."
}
```
