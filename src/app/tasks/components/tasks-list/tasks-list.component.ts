import { Component, Input } from '@angular/core';
import { StatusTask } from '../../../commons';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {

  @Input() tasks: Task[] = [];
  @Input() title: string = '';

  constructor(private tasksService: TasksService) { }

  drop(event: DragEvent): void {
    const id = event.dataTransfer?.getData('draggedTaskId') || '';
    id && this.tasksService.updateStatusTask(id, this.title as StatusTask);
  }
}
