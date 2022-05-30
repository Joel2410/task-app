import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  public taskForm: FormGroup;
  public taskId: string = '';

  get accionForm(): string {
    return this.taskId ? 'Update' : 'Create'
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
      description: ['', [Validators.required, Validators.minLength(4)]]
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
