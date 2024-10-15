import { Component, Input } from '@angular/core';
import { DbzService } from '../../services/dbz.service';
import { dragonball } from '../../interfaces/dragonball';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dbz',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './dbz.component.html',
  styleUrl: './dbz.component.css'
})
export class DbzComponent {
  @Input() public dragonPer: dragonball| undefined
  loadingImg:boolean = false
}
