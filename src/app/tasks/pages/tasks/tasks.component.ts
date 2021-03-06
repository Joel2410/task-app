import { Component, OnInit } from '@angular/core';
import { TasksService } from '@tasksServices/tasks.service';
import { Task } from '@tasksInterfaces/task';
import { StatusTask } from '@enums/status-task.enum';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  droppables = [StatusTask.TODO, StatusTask.DOING, StatusTask.DONE];

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasksService.loadTasks();
  }

  getTasks(status: StatusTask | string): Task[] {
    return status
      ? this.tasksService.getTaskByStatus(status as StatusTask)
      : this.tasksService.getTasks();
  }
}
