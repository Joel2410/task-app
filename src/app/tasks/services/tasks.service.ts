import { Injectable } from '@angular/core';
import { StatusTask } from '@enums/status-task.enum';
import { Task } from '../interfaces/task';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private ITEM_NAME = 'tasks';
  private tasks: Task[] = [];

  constructor() {}

  public getTasks(): Task[] {
    return this.tasks;
  }

  public getTaskById(id: string): Task | undefined {
    return this.tasks.find((task) => task.id == id);
  }

  public getTaskByStatus(status: StatusTask): Task[] {
    return this.tasks.filter((task) => task.status == status);
  }

  public createTask(task: Task): void {
    task.id = uuidv4();
    task.status = StatusTask.TODO;
    task.createdAt = new Date();
    this.tasks.push(task);
    this.saveTasks();
  }

  public updateTask(id: string, title: string, description: string): void {
    this.updateTaskBehind({ id, title, description });
  }

  public updateStatusTask(id: string, status: StatusTask): void {
    this.updateTaskBehind({ id, status });
  }

  public updateCollapsedTask(id: string, collapsed: boolean): void {
    this.updateTaskBehind({ id, collapsed });
  }

  private updateTaskBehind(changes: Task) {
    const task = this.getTaskById(changes.id || '');
    if (task) {

      task.title = changes.title ?? task.title;
      task.description = changes.description ?? task.description;
      task.status = changes.status ?? task.status;
      task.collapsed = changes.collapsed ?? task.collapsed;
      task.title = changes.title ?? task.title;

      this.saveTasks();
    }
  }

  public deleteTask(id: string): void {
    const task = this.getTaskById(id);
    if (task) {
      this.tasks = this.tasks.filter((t) => t.id != task.id);
      this.saveTasks();
    }
  }

  private saveTasks(): void {
    localStorage.setItem(this.ITEM_NAME, JSON.stringify(this.tasks));
  }

  public loadTasks(): void {
    const storedTasks = localStorage.getItem(this.ITEM_NAME);

    if (storedTasks) {
      try {
        this.tasks = JSON.parse(storedTasks);
      } catch {
        this.tasks = [];
      }
    }
  }
}
