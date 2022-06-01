import { NgModule } from '@angular/core';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';
import { TasksService } from './services/tasks.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskFormComponent } from './pages/task-form/task-form.component';

@NgModule({
  declarations: [
    TasksListComponent,
    TaskComponent,
    TasksComponent,
    TaskFormComponent,
  ],
  imports: [CommonModule, TasksRoutingModule, SharedModule],
  providers: [TasksService, ConfirmationService, MessageService],
})
export class TasksModule {}
