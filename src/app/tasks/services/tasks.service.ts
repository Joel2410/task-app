import { Injectable } from '@angular/core';
import { StatusTask } from '../../commons';
import { Task } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private ITEM_NAME: string = 'tasks';
  private tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id == id);
  }

  getTaskByStatus(status: StatusTask): Task[] {
    return this.tasks.filter(task => task.status == status);
  }

  createTask(task: Task): void {
    task.id = uuidv4();
    task.status = StatusTask.TODO;
    task.createdAt = new Date();
    this.tasks.push(task);
    this.saveTasks();
  }

  updateTask(id: string, title: string, description: string): void {
    const task = this.getTaskById(id);
    if (task) {
      task.title = title;
      task.description = description;
      this.saveTasks();
    }
  }

  deleteTask(id: string): void {
    const task = this.getTaskById(id);
    if (task) {
      this.tasks = this.tasks.filter(t => t.id != task.id);
      this.saveTasks();
    }
  }

  updateStatusTask(id: string, status: StatusTask): void {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
      this.saveTasks();
    }
  }

  updateCollapsedTask(id: string, collapsed: boolean): void {
    const task = this.getTaskById(id);
    if (task) {
      task.collapsed = collapsed;
      this.saveTasks();
    }
  }

  saveTasks(): void {
    localStorage.setItem(this.ITEM_NAME, JSON.stringify(this.tasks));
  }

  loadTasks(): void {
    const storedTasks = localStorage.getItem(this.ITEM_NAME);
    this.tasks = storedTasks && JSON.parse(storedTasks) || [];
  }
}
