# 🍽️ Recipe App

A full-stack recipe browsing app built with:

- **Backend:** Node.js + Express + TypeScript
- **Frontend:** React + Vite + TypeScript + styled-components
- **API:** [TheMealDB](https://www.themealdb.com/api.php)

---

## 🧾 Features

### ✅ Backend API

- `/recipes`: Fetch recipes (with optional filters by ingredient, country, or category)
- `/recipes/:id`: Fetch detailed information about a specific recipe

### 🖥️ Frontend

- **Home Page**:
  - Displays list of all or filtered recipes
  - Filter by ingredient, country, or category
- **Recipe Detail Page**:
  - Displays image, name, country, instructions, ingredients
  - Interactive filtering via ingredient, country, and category

---

## 📁 Project Structure

/recipe-app

- backend # Express.js + TypeScript
- frontend # React + Vite + styled-components

---

## ⚙️ Requirements

- Node.js (v18+ recommended)
- npm or yarn

---

## 🚀 Getting Started

### 1. Clone the repository

- git clone https://github.com/your-username/recipe-app.git
- cd recipe-app

### 🔧 Backend Setup

## Step 1: Install dependencies

- cd backend
- npm install

## Step 2: Create .env file

PORT=4000
THEMEALDB_API=https://www.themealdb.com/api/json/v1/1

## Step 3: Start development server

- npm run dev
- The backend will run at: http://localhost:4000

### 🎨 Frontend Setup

## Step 1: Install dependencies

- cd ../frontend
- npm install

## Step 2: Create .env file

VITE_API_URL=http://localhost:4000

## Step 3: Start frontend dev server

- npm run dev
- The frontend will run at: http://localhost:5173

### 🧪 Testing the App

1. Start backend (npm run dev in /backend)

2. Start frontend (npm run dev in /frontend)

3. Open http://localhost:5173 in your browser

4. Browse recipes, filter them, and view detailed information
