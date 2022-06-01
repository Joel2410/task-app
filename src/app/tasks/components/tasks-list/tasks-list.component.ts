import { Component, Input } from '@angular/core';
import { StatusTask } from '@enums/status-task.enum';
import { TasksService } from '@tasksServices/tasks.service';
import { Task } from '@tasksInterfaces/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent {
  @Input() title = '';
  @Input() tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  drop(event: DragEvent): void {
    const id = event.dataTransfer?.getData('draggedTaskId') || '';
    if (id) {
      this.tasksService.updateStatusTask(id, this.title as StatusTask);
    }
  }
}
