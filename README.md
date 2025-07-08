# Pixisphere

Pixisphere is a photographer listing and portfolio platform built with React.js, Redux Toolkit, Tailwind CSS, and JSON Server.

## Live Demo

[Live Link](https://pixisphere-pait.onrender.com/)

## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- Axios
- JSON Server (Mock Backend)

---
## Installation & Setup

### 1️ Clone the Repository

```bash
git clone https://github.com/CtrlAltWin/CodersMedia.git
cd CodersMedia/frontend
```

### 2️ Install Dependencies

```bash
npm install
```

### 3️ Run JSON Server  

```bash
npm install -g json-server@0.17.0
json-server --watch db.json --port 3001
```

Replace `http://localhost:5000` with your **deployed backend URL** in production.

### 4️ Create .env file

```bash
VITE_API_URL=http://localhost:3001
```
### 4️ Start the Development Server

```bash
npm run dev
```

The app will run on **http://localhost:5173**.

---
## Features Overview
### Filtering
- Users can filter photographers by:

- Search term (name, location, tags)

- Price range

- Minimum rating

- Photography styles

- City

- Sort by rating, price, or name
  
---

### Filtering Logic
- Filters are managed via Redux Slice to maintain a global state.

- Filtering is done on the client side after fetching all photographers initially.

- Separate filter components (checkboxes, sliders, radios) update the Redux state.

- A “Clear Filters” option resets everything to default.
  
---

### Debounce
- The search functionality uses a debounce mechanism (300ms) to avoid unnecessary API calls and provide smoother UX.

---

## ⚠️ Important Note

- The backend (JSON Server) is hosted on **Render’s free tier**, which automatically puts the server to sleep after inactivity.
- The **first API call may take 40–50 seconds** to respond while the server wakes up.
- Once active, subsequent requests will be faster.

