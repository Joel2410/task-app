import { TestBed } from '@angular/core/testing';
import { StatusTask } from 'src/app/commons';
import { Task } from '../interfaces/task';

import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created a task', () => {
    service.createTask({ title: 'Tarea 1', description: 'Pruebas unitarias con Jasmine' });
    expect(service.getTasks().length).toEqual(1);
  });
/*
  it('should be updated a task', () => {
    const task: Task = service.getTasks()[0];

    if (task?.id) {
      service.updateTask(task.id, 'Tarea 2', task.description || '');
    }
    expect(task.title || '').toEqual('Tarea 2');
  });

  it('should be updated status task', () => {
    const task: Task = service.getTasks()[0];

    if (task?.id) {
      service.updateStatusTask(task.id || '', StatusTask.DOING);
    }
    expect(task.status).toEqual(StatusTask.DOING);
  });

  it('should be deleted a task', () => {
    const task: Task = service.getTasks()[0];
    service.deleteTask(task.id || '');
    expect(service.getTasks().length).toEqual(0);
  });
*/
});
