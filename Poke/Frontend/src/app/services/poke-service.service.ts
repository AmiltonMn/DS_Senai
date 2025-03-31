import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonData } from '../models/Pokemon';

export interface PokemonDt {
    pokemon: PokemonData[];
}

@Injectable({
    providedIn: 'root'
})
export class PokeService {

    private BackendUrl = "http://localhost:8080";

    constructor(private http: HttpClient) { }

    get(): Observable<PokemonDt> {
        return this.http.get<PokemonDt>(`${this.BackendUrl}/api`);
    }

    getPokemon(name?: string, id?: number): Observable<any> {
        return this.http.get<PokemonData>(`${this.BackendUrl}/api/${name === undefined || name === "" ? id : name}`);
    }

    setAll(): Observable<void> {
        return this.http.post<void>(`${this.BackendUrl}/api/setPokemon`, {});
    }

}
