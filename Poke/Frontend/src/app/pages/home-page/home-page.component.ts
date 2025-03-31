import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PokeService } from '../../services/poke-service.service';
import { map, Observable, startWith, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PokemonData } from '../../models/Pokemon';
import { PokeCardComponent } from "../../components/poke-card/poke-card.component";
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { PokemonAppearComponent } from '../../components/pokemon-appear/pokemon-appear.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatCardModule,
    MatAutocompleteModule,
    AsyncPipe,
    ReactiveFormsModule,
    PokeCardComponent,
    PokemonAppearComponent
],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  name = new FormControl('');
  pokeName: string = "";
  selectedPokemon: PokemonData | undefined = undefined;
  data: any;
  options: string[] = [];
  found: boolean = false;
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private service: PokeService
  ) { }
  ngOnInit(): void {
    let pokemon = this.service.get();

    pokemon.subscribe(
      value => {
        value.pokemon.forEach(
          element => {
            this.options.push(element.Name)
          }
        )
      }
    )
    
    this.filteredOptions = this.name.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  ChangeSelectedPokemon(name: string) {
    this.service.getPokemon(name.toLowerCase(), undefined)
      .subscribe(val => {
        this.selectedPokemon = val.pokemon

        if (this.selectedPokemon?.Name == name.toLowerCase()) {
          this.found = true
        } else {
          this.found = false
        }
    });
    console.log("Observable" + this.service.getPokemon(name))
  }
}
