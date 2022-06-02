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

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should be create, update and delete a task', () => {
    // Create task
    service.createTask({
      title: 'Tarea 1',
      description: 'Pruebas unitarias con Jasmine',
    });
    expect(service.getTasks().length).toEqual(1);

    const task: Task = service.getTasks()[0];

    // Update task
    service.updateTask(task.id || '', 'Tarea 2', task.description || '');
    expect(task.title || '').toEqual('Tarea 2');

    // Update status task
    service.updateStatusTask(task.id || '', StatusTask.DOING);
    expect(task.status).toEqual(StatusTask.DOING);

    // Delete task
    service.deleteTask(task.id || '');
    expect(service.getTasks().length).toEqual(0);
  });
});
