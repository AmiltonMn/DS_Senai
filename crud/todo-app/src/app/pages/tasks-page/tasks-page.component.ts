import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TaskData, TasksService } from '../../service/tasks-service.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks-page',
  imports: [ CardComponent, CommonModule, AddTaskComponent, RouterOutlet ],
  templateUrl: './tasks-page.component.html',
  styleUrl: './tasks-page.component.css'
})

export class TasksPageComponent implements OnInit {
  title = 'todo-app';

  tasks: Observable<TaskData> | undefined

  constructor(
    private service: TasksService
  ) { }

  ngOnInit(): void {
    this.tasks = this.service.get()
  }
}
