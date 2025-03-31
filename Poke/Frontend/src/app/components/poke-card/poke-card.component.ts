import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PokemonData } from '../../models/Pokemon';

@Component({
  selector: 'app-poke-card',
  imports: [ 
    MatCardModule,
    CommonModule
  ],
  templateUrl: './poke-card.component.html',
  styleUrl: './poke-card.component.css'
})
export class PokeCardComponent {
  
  @Input()
  found: boolean = false
  @Input()
  selectedPokemon: PokemonData | undefined
  
}
