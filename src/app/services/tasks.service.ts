import { Injectable } from '@angular/core';
import { StatusTask } from '../commons/enums/status-task.enum';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksCount: number = 0;
  tasks: Task[] = [];

  constructor() { }

  createTask(task: Task): void {
    task.id = ++this.tasksCount;
    task.status = StatusTask.TODO;
    this.tasks.push(task);
    this.saveTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id!=task.id);
    this.saveTasks();
  }

  updateStatusTask(task: Task, status: StatusTask): void {
    task.status = status;
    this.saveTasks();
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks && JSON.parse(storedTasks);
  }
}
