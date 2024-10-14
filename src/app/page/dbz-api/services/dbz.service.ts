import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dragonball, personoaje } from '../interfaces/dragonball';


@Injectable({
  providedIn: 'root'
})
export class DbzService {
  private dbzUrlApi: string = 'https://dragonball-api.com/api/characters'
  constructor(
    private http:HttpClient
  ) { }

  getPersonajes():Observable<dragonball>{
    return this.http.get<dragonball>(this.dbzUrlApi)
  }

  getPersonaje(id:number):Observable<personoaje>{
    return this.http.get<personoaje>(`${this.dbzUrlApi}/${id}`)
  }

  
}
