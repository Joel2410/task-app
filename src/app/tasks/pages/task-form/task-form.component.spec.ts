import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TaskFormComponent } from './task-form.component';

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: ComponentFixture<TaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskFormComponent],
      imports: [AppRoutingModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('task form should be invalid', () => {
    expect(component.taskForm.invalid).toBeTrue();
  });

  it('task form should be valid', () => {
    const controlTitle = component.taskForm.controls['title'];
    const controldescription = component.taskForm.controls['description'];

    controlTitle.setValue('Tarea de prueba');
    controldescription.setValue('Esto es un ejemplo');

    expect(component.taskForm.valid).toBeTrue();
  });
});
