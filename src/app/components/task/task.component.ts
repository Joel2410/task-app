import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {};

  constructor(private tasksService: TasksService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void { }

  editTask(): void {
    this.tasksService.editingTask = this.task;
    this.router.navigate(['create-task']);
  }

  deleteTask(): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this task?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Deleted successfully' });
        this.tasksService.deleteTask(this.task);
      }
    });
  }

  dragStart(event: DragEvent): void {
    event.dataTransfer?.setData('task', JSON.stringify(this.task));
  }

  dragEnd(event: DragEvent): void {
    event.dataTransfer?.clearData();
  }

  collapsed(collapsed: boolean): void {
    this.tasksService.updateCollapsedTask(this.task, collapsed);
  }
}
