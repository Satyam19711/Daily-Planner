import { getTasks, saveTasks } from "./storage.js";
import { throttle } from "./debounceThrottle.js";

let tasks = getTasks();

export function addTask() {
  const input = document.getElementById("taskInput");
  const category = document.getElementById("categorySelect").value;
  const text = input.value.trim();
  if (text === "") return;

  tasks.push({ text, completed: false, category });
  input.value = "";
  saveTasks(tasks);
  renderTasks();
}

export function renderTasks(filteredTasks = tasks) {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  filteredTasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    // Left side: checkbox + task text + category
    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleComplete(index));

    const taskSpan = document.createElement("span");
    taskSpan.textContent = task.text;
    taskSpan.classList.add("task-text");

    const categorySpan = document.createElement("span");
    categorySpan.textContent = `(${task.category})`;
    categorySpan.classList.add("category");

    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(taskSpan);
    taskLeft.appendChild(categorySpan);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.classList.add("delete-btn");
    delBtn.onclick = () => deleteTask(index);

    li.appendChild(taskLeft);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
  renderTasks();
}

export function clearAllTasks() {
  if (confirm("Are you sure you want to clear all tasks?")) {
    tasks = [];
    saveTasks(tasks);
    renderTasks();
  }
}

export function filterTasks(e) {
  const query = e.target.value.toLowerCase();
  const filtered = tasks.filter((task) =>
    task.text.toLowerCase().includes(query)
  );
  renderTasks(filtered);
}

export const handleBackToTop = throttle(() => {
  const btn = document.getElementById("backToTopBtn");
  btn.style.display = window.scrollY > 100 ? "block" : "none";
}, 200);
