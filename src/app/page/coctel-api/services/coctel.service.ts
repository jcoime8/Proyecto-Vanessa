import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cocteles } from '../interfaces/coctel';

@Injectable({
  providedIn: 'root'
})
export class CoctelService {
  coctel:string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f='
  constructor(
    private http:HttpClient
  ) { }

  getcocteles():Observable<cocteles>{
    return this.http.get<cocteles>(`${this.coctel}a`)
  }

  getPaginacionCoctel(letra:string):Observable<cocteles>{
    return this.http.get<cocteles>(`${this.coctel}${letra}`)
  }
}
