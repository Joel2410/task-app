import { Component } from '@angular/core';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task-app';

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getTasks();
  }
}
