import { Component, OnInit } from '@angular/core';
import { PokemonData } from '../../models/Pokemon';
import { PokeService } from '../../services/poke-service.service';

@Component({
  selector: 'app-pokemon-appear',
  imports: [],
  templateUrl: './pokemon-appear.component.html',
  styleUrl: './pokemon-appear.component.css'
})
export class PokemonAppearComponent implements OnInit {

  constructor(
    private service: PokeService
  ) { }

  pokemon: PokemonData | undefined;
  id: number = 0;
  top: number = 0;
  left: number = 0;
  bottom: number = 0;

  ngOnInit(): void {
    setInterval(() => { 
      this.Randomize();
      this.service.getPokemon("", this.id).subscribe(
        value => {
          this.pokemon = value.pokemon;
        }
      )
    }, 5000)
  }

  private Randomize() {
    this.id = Math.floor(Math.random() * 1025) + 1;
    this.top = Math.floor(Math.random() * 1000) + 1;
    this.left = Math.floor(Math.random() * 1000) + 1;
    this.bottom = Math.floor(Math.random() * 1000) + 1;
    console.log('Top: ' + this.top + ' Left: ' + this.left + ' Bottom: ' + this.bottom);
  }
}
