import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  tasks: Task[] = []

  constructor(
    private http: HttpClient
  ) {
    this.initIfNeeded()
  }

  get() : Observable<TaskData> {
    return this.http.get<TaskData>(this.apiUrl + '/get')
  }

  getById(id: string) : Task | null {
    for (let task of this.tasks) 
    {
      if (id !== task._id) {
        continue;
      }

      return task
    }

    return null;
  }

  private initIfNeeded() {
    if (this.tasks[0] === undefined) {
      this.initialize()
    }
  }

  initialize() {
    this.get().subscribe(data => {
      this.tasks = data.tasks
    })

    console.log(this.tasks)
  }
}
