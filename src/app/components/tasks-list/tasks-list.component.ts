import { Component, Input, OnInit } from '@angular/core';
import { StatusTask } from 'src/app/commons/enums/status-task.enum';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  @Input() tasks: Task[] = [];

  @Input() title: string = '';

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void { }

  drop(event: DragEvent): void {
    if (event.dataTransfer) {
      const storedTask: Task = JSON.parse(event.dataTransfer?.getData('task'));
      
      if (storedTask.id) {
        const newStatus : StatusTask = StatusTask[this.title as keyof typeof StatusTask]
        this.tasksService.updateStatusTask(storedTask.id, newStatus);
      }
    }
  }

}
