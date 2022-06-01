import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForm } from '@enums/action-form.enum';
import { TasksService } from '@tasksServices/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;
  public taskId = '';

  get actionForm(): string {
    return this.taskId ? ActionForm.UPDATE : ActionForm.CREATE;
  }

  constructor(
    private tasksService: TasksService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.taskForm = this.buildForm();
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id') || '';
    if (this.taskId) {
      const task = this.tasksService.getTaskById(this.taskId);
      this.taskForm.patchValue(task || {});
    }
  }

  buildForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit(): void {
    if (this.taskId) {
      const { title, description } = this.taskForm.value;
      this.tasksService.updateTask(this.taskId, title, description);
    } else {
      this.tasksService.createTask(this.taskForm.value);
    }

    this.router.navigate(['tasks']);
  }
}
