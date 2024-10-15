import { Component, Input } from '@angular/core';
import { cocteles } from '../../interfaces/coctel';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public cocteles:cocteles| undefined
  loadingImg:boolean = false
}
