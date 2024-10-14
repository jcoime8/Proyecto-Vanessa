import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Pokemons } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrlBase:string = 'https://pokeapi.co/api/v2/pokemon'
  constructor(
    private http:HttpClient
  ) { }

  getPokemons():Observable<Pokemons>{
    return this.http.get<Pokemons>(this.apiUrlBase)
  }

  getPokemon(termin:string|number):Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.apiUrlBase}/${termin}`)
  }
}
