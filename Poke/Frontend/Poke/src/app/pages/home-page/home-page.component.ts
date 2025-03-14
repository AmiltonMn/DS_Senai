import { Component, OnChanges, OnInit, output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  // Certifique-se de que isso esteja importado aqui
import { PokeService } from '../../services/poke-service.service';
import { Observable } from 'rxjs';
import { PokemonData } from '../../models/Pokemon';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    MatCardModule
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  name: string = "";
  selectedPokemon: Observable<any> | undefined;
  options: Observable<any> | undefined;

  constructor(
    private service: PokeService  // Injeção do serviço
  ) { }
  
  ngOnInit(): void {
    this.options = this.service.get();  // Chama o serviço
    console.log(this.options);
  }

  ChangeSelectedPokemon(name: string) {
    this.selectedPokemon = this.service.getByName(name)
    console.log(this.selectedPokemon)
  }
}
