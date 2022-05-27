import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  get Tasks(): Task[] {
    return this.tasksService.tasks;
  }
  
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void { }

}
