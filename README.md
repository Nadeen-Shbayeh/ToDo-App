# 📝 React To-Do List App

A clean and modern To-Do List built with **React**.  
It helps you stay productive by tracking your daily tasks with a smooth and responsive interface.

---

## 🚀 Features

- ✅ Add new tasks  
- 🧠 Mark tasks as complete/incomplete  
- ❌ Delete tasks  
- 💾 Automatically saves tasks using **localStorage**  
- 💅 Fully responsive UI with custom modern CSS  

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── TodoApp.jsx
│   ├── InputForm.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
├── App.js
├── App.css
└── index.js

```

## 💡 What I Changed or Added
- **Components**: I created separate components for the Todo App, Input Form, Todo List, and
Todo Item. This makes the code more organized and easier to maintain.
- **State Management**: I used the **useState** hook to manage the state of the application.
- **Event Handling**: I added event handlers for adding, deleting, and marking tasks as complete.
- **Storage**: I used **localStorage** to save the tasks even after the user closes the browser
- **CSS**: I added custom CSS to make the UI more modern and responsive.
- **React Hooks**: I used the **useState** and **useEffect** hooks to manage the
state and side effects of the application.

.

## 🧠 Challenges I Faced
- **State Management**: Managing the state of the application was a challenge, especially when it came to
deleting tasks and updating the list.
- **Storage**: Setting up localStorage to sync with React state correctly.
- **Style**: Debugging why styles weren’t loading (missing import in App.js).



## 📦 Getting Started 📦
### Step 1: Clone the repository
```bash
git clone https://github.com/Nadeen-Shbayeh/ToDo-App.git
cd ToDo-App
```
### Step 2: Install dependencies
```bash
npm install
```
### Step 3: Start the app
```bash
npm start
```
### Step 4: Open the app in your browser
http://localhost:3000

## 💖 Author 
Made with love by Nadeen Shbayeh
GitHub: @Nadeen-Shbayeh
