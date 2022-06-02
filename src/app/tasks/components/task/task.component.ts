import { Component, Input } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TasksService } from '@tasksServices/tasks.service';
import { Task } from '@tasksInterfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Task = {};

  constructor(
    private tasksService: TasksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  deleteTask(): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this task?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'Deleted successfully',
        });
        this.tasksService.deleteTask(this.task.id || '');
      },
    });
  }

  dragStart(event: DragEvent): void {
    event.dataTransfer?.setData('draggedTaskId', this.task.id || '');
  }

  dragEnd(event: DragEvent): void {
    event.dataTransfer?.clearData();
  }

  collapsed(collapsed: boolean): void {
    this.tasksService.updateCollapsedTask(this.task.id || '', collapsed);
  }
}
