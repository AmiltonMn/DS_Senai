import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TasksService } from '../../service/tasks-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailsCardComponent } from '../../components/details-card/details-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'details-page',
  imports: [ DetailsCardComponent, CommonModule ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent implements OnInit {

  task: Task | undefined

  constructor(
    private service: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let param = params.get('id')
      if (param === null)
        return;

      // Convertendo de string para number ou let id = parseInt(param);
      let id = param;
      let task = this.service.getById(id);

      if (task === null)
        return;

      this.task = task;
    })
  }

}
