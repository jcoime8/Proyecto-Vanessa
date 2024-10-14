import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { DbzApiComponent } from './page/dbz-api/dbz-api.component';
import { PokeApiComponent } from './page/poke-api/poke-api.component';
import { CoctelApiComponent } from './page/coctel-api/coctel-api.component';
import { ErrorComponent } from './page/error/error.component';

export const routes: Routes = [
    {path: '', redirectTo:'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'Dbz', component:DbzApiComponent},
    {path:'pokemon', component:PokeApiComponent},
    {path:'coctel', component:CoctelApiComponent},
    {path:'**', component:ErrorComponent}
];
