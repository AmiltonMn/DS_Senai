import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokedexCardComponent } from "../../components/pokedex-card/pokedex-card.component";

@Component({
  selector: 'app-pokedex-page',
  imports: [MatCardModule, PokedexCardComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent {

}
