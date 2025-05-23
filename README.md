# 📝 My Daily Planner

A simple and elegant task planner web app that helps users stay organized by allowing them to add, complete, delete, and search tasks. The project is built using **HTML5**, **CSS3**, and **JavaScript (ES6)** and is fully deployed on **Netlify**.

> 🔗 [Live Demo](https://planningdaily.netlify.app/)



---
![daily planner](https://github.com/user-attachments/assets/6a0b9f5c-6ec7-4746-b2a8-9c83f7c46be1)


---

## 💡 Features

- ✅ Add new tasks using the input field
- ✅ Mark tasks as complete (with a strikethrough)
- ✅ Delete tasks individually
- ✅ Search/filter tasks (with debounced search input)
- ✅ Tasks are saved using `localStorage` (persist even after refresh)
- ✅ Responsive design using **Flexbox**
- ✅ “Back to Top” button appears on scroll (throttled scroll event)

---

## 🚀 Stretch Goals Implemented

- [x] Back to Top button (using throttled scroll listener)
- [x] Debounced search input
- [x] Modular JavaScript using ES6 modules
- [x] Persistent task saving using localStorage
- [x] Responsive UI with clean layout

---

## 🛠️ Tech Stack

| Tech | Description |
|------|-------------|
| 🧱 HTML5 | Semantic structure |
| 🎨 CSS3 | Flexbox layout, media queries |
| ⚙️ JavaScript (ES6) | DOM Manipulation, LocalStorage, Modules, Debounce & Throttle |
| 🌐 Netlify | Deployment |

---

## 📁 Folder Structure

/
├── index.html
├── style.css
├── js/
│ ├── main.js
│ ├── domUtils.js
│ ├── storage.js
│ └── debounceThrottle.js


---

## 📦 How to Use Locally

```bash
# Clone the repository
git clone https://github.com/satyam19711/Daily-Planner.git

# Open index.html in your browser
