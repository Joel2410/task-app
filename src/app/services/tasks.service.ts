import { Injectable } from '@angular/core';
import { StatusTask } from '../commons/enums/status-task.enum';
import { Task } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  editingTask: Task = { };

  constructor() { }

  createTask(task: Task): void {
    task.id = uuidv4();
    task.status = StatusTask.TODO;
    task.createdAt = new Date();
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTask(task: Task, title: string, description: string): void {
    task.title = title;
    task.description = description;

    this.saveTasks();
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id != task.id);
    this.saveTasks();
  }

  updateStatusTask(id: string, status: StatusTask): void {
    const task = this.tasks.find(task => task.id = id);

    if (task) {
      task.status = status;
      this.saveTasks();
    }
  }

  updateCollapsedTask(task: Task, collapsed: boolean): void {
    task.collapsed = collapsed;
    this.saveTasks();
  }

  saveTasks(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getTasks(): void {
    const storedTasks = localStorage.getItem('tasks');
    this.tasks = storedTasks && JSON.parse(storedTasks) || [];
  }
}
