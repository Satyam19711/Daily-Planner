const TASKS_KEY = "dailyPlannerTasks";

export function getTasks() {
  const saved = localStorage.getItem(TASKS_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
