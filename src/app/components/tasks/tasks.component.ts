import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
import { StatusTask } from 'src/app/commons/enums/status-task.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  get tasks(): Task[] {
    return this.tasksService.tasks;
  }

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void { }

  getTasks(status: StatusTask | string): Task[] {
    return status ? this.tasks.filter(task => task.status == status) : this.tasks;
  }

  createTask(): void {
    this.router.navigate(['create-task']);
  }

}
