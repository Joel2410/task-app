import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  taskForm = new FormGroup({
    title: new FormControl('', [ Validators.required ]),
    description: new FormControl('', [ Validators.required, Validators.minLength(4) ]),
  });

  constructor(private tasksService: TasksService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.tasksService.createTask(this.taskForm.value);
    this.router.navigate(['tasks']);
  }

}
