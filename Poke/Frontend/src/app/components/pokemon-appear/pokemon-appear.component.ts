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

  ngOnInit(): void {
    setInterval(() => { 
      this.randomizeId();
      this.service.getPokemon("", this.id).subscribe(
        value => {
          this.pokemon = value.pokemon;
        }
      )
      
      console.log(this.pokemon?.Image)
    }, 5000)
  }

  private randomizeId() {
    this.id = Math.floor(Math.random() * 1025) + 1;
  }
}
