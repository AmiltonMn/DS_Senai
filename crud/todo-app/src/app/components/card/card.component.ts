import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Task } from '../../models/task';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [ MatCardModule, MatListModule, MatIconModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  task: Task | undefined
}
