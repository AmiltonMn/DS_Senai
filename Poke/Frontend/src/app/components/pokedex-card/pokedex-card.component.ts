import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pokedex-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './pokedex-card.component.html',
  styleUrl: './pokedex-card.component.css'
})
export class PokedexCardComponent {

}
