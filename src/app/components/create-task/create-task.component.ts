import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  taskForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  get task(): Task {
    return this.tasksService.editingTask;
  };

  get title(): string {
    return this.task.id ? 'Update task' : 'Create task'
  }

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void { 
    if (this.task.id) {
      this.taskForm.setValue({ title: this.task.title, description: this.task.description });
    }
  }

  onSubmit(): void {
    if (this.task.id) {
      const { title, description } = this.taskForm.value;
      this.tasksService.updateTask(this.task, title, description);
    } else {
      this.tasksService.createTask(this.taskForm.value);
    }

    this.router.navigate(['tasks']);
  }

  cancel(): void {
    this.router.navigate(['tasks']);
  }

  ngOnDestroy() {
    this.tasksService.editingTask = { };
  }

}
