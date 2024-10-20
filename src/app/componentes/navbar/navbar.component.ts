import { User } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchComponent } from '../../page/poke-api/search/search.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import firebase from 'firebase/auth'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SearchComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  user$!: Observable<firebase.User | null>

  constructor(private _srvAuth:AuthService){}

  ngOnInit(): void{
    this.user$ = this._srvAuth.getUser()
  }
}
