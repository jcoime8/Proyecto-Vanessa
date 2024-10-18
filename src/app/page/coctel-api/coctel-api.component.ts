import { Component, OnInit } from '@angular/core';
import { cocteles } from './interfaces/coctel';
import { CoctelService } from './services/coctel.service';
import { CardComponent } from './card/card/card.component';
import { PaginacionComponent } from './paginacion/paginacion/paginacion.component';

@Component({
  selector: 'app-coctel-api',
  standalone: true,
  imports: [CardComponent, PaginacionComponent],
  templateUrl: './coctel-api.component.html',
  styleUrl: './coctel-api.component.css',
})
export class CoctelApiComponent implements OnInit {
  coctelAll: cocteles | undefined;

  constructor(private _srvCocteles: CoctelService) {}

  ngOnInit(): void {
    this._srvCocteles.getPaginacionCoctel().subscribe(
      (cocteles) => {
        if (!cocteles) {
          console.log('no hay cocteles');
        } else {
          this.coctelAll = cocteles;
        }
      },
      (error) => {
        console.error('Error al obtener cocteles: ', error);
      }
    );
  }

  setNewCocteles(newCocteles:cocteles):void{
    this.coctelAll = newCocteles
  }
}
