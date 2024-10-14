import { CardComponent } from './../poke-api/card/card.component';
import { Component, OnInit } from '@angular/core';
import { dragonball } from './interfaces/dragonball';
import { DbzService } from './services/dbz.service';
import { DbzComponent } from './card/dbz/dbz.component';


@Component({
  selector: 'app-dbz-api',
  standalone: true,
  imports: [DbzComponent, CardComponent],
  templateUrl: './dbz-api.component.html',
  styleUrl: './dbz-api.component.css'
})
export class DbzApiComponent implements OnInit {
  dbzPersonajes:dragonball | undefined
  constructor(
    private _svrDrgonbal:DbzService
  ){}

  ngOnInit(): void {
    this._svrDrgonbal.getPersonajes().subscribe(perDbz =>{
      perDbz.items.forEach(personaje =>{
        this._svrDrgonbal.getPersonaje(Number(personaje.id)).subscribe(perE =>{
          personaje.data = perE
        })
      })
      this.dbzPersonajes = perDbz
    })
  }
  
}
