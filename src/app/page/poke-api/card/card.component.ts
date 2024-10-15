import { Pokemon } from './../interfaces/pokemon';
import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pokemons } from '../interfaces/pokemon';
import { NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgForOf, NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnChanges{
  @Input() public pokemonAll:Pokemons | undefined
  loadingImg:boolean = false

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['pokemonAll']){
      
    }
  }
}
