import { CardComponent } from './../poke-api/card/card.component';
import { Component, OnInit } from '@angular/core';
import { dragonball } from './interfaces/dragonball';
import { DbzService } from './services/dbz.service';
import { DbzComponent } from './card/dbz/dbz.component';
import { PaginacionComponent } from './paginacion/paginacion/paginacion.component';


@Component({
  selector: 'app-dbz-api',
  standalone: true,
  imports: [DbzComponent, CardComponent, PaginacionComponent],
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
          this._svrDrgonbal.nextUrl = perDbz.links.next
          this._svrDrgonbal.lastUrl = perDbz.links.previous
        })
      })
      this.dbzPersonajes = perDbz
    })
  }

  setNewPersonaje(newPersonaje:dragonball):void{
    this.dbzPersonajes = newPersonaje
    console.log(newPersonaje)
  }
  
}
