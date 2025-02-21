import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TaskData {
  message: string,
  tasks: Task[]
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {

  private apiUrl = "http://localhost:8080/tasks"

  task: Observable<Task> | undefined

  constructor(
    private http: HttpClient
  ) { }

  get() : Observable<TaskData> {
    return this.http.get<TaskData>(this.apiUrl)
  }

  getById(id: string) : Observable<Task> | null {
    return this.http.get<Task>(this.apiUrl + '/get/' + id)
  }
  
  newTask(task: Task) {
    return this.http.post(this.apiUrl + '/new', task)
  }
}
