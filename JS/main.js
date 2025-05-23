import {
  addTask,
  renderTasks,
  clearAllTasks,
  filterTasks,
  handleBackToTop,
} from "./taskManager.js";
import { debounce } from "./debounceThrottle.js";

document.getElementById("addTaskBtn").addEventListener("click", addTask);
document.getElementById("clearAllBtn").addEventListener("click", clearAllTasks);
document
  .getElementById("searchInput")
  .addEventListener("input", debounce(filterTasks, 300));
window.addEventListener("scroll", handleBackToTop);

document.getElementById("backToTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderTasks();
