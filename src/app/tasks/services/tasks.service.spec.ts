import { TestBed } from '@angular/core/testing';

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

  it('should have getTasks', () => {
    expect(service.getTasks).toBeTruthy();
  });

  it('should be created a task', () => {
    service.createTask({ title: 'Tarea 1', description: 'Hacer pruebas unitarias con Jasmine' });
    expect(service.getTasks().length).toEqual(1);
  });


});
