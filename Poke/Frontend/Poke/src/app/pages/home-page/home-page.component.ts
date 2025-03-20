import { Component, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PokemonDt, PokeService } from '../../services/poke-service.service';
import { elementAt, map, Observable, startWith, tap } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PokemonData } from '../../models/Pokemon';
import { subscribeToArray } from 'rxjs/internal/util/subscribeToArray';

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
    ReactiveFormsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
onKey(arg0: any) {
throw new Error('Method not implemented.');
}
  myControl = new FormControl('');
  pokeName: string = "";
  selectedPokemon: Observable<PokemonData> | undefined = undefined;
  data: any;
  options: string[] = [];
  found: boolean = false;
  filteredOptions: Observable<string[]> | undefined;

  constructor(
    private service: PokeService  // Injeção do serviço
  ) { }
  
  ngOnInit(): void {
    let pokemon = this.service.get();
    pokemon.subscribe(
      value => value.pokemon.forEach(
        element => {
          this.options.push(element.Name)
        }
      )
    )

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option: string) => option.toLowerCase().includes(filterValue));
  }

  ChangeSelectedPokemon(name: string) {
    this.service.getByName(name).subscribe(
      (response) => {

        this.selectedPokemon = response.pokemon;

        if (response.pokemon.Name == name) {
          this.found = true
          console.log(this.selectedPokemon)
        } else {
          this.found = true
        }
      }
    )
  }
}
