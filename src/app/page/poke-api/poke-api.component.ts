import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';
import { Pokemons } from './interfaces/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-poke-api',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './poke-api.component.html',
  styleUrl: './poke-api.component.css'
})
export class PokeApiComponent implements OnInit {
  pokemons:Pokemons | undefined;
  constructor(
    private _srvPokemons:PokemonService
  ){ }

  ngOnInit(): void {
      this._srvPokemons.getPokemons().subscribe(pokemonAll =>{
        pokemonAll.results.forEach(pokemon =>{
          this._srvPokemons.getPokemon(pokemon.name).subscribe(pokeData => {
            pokemon.data = pokeData
          })
        })
        this.pokemons = pokemonAll
        
      })
  }
}
