import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:"", redirectTo: '/pokemon-list',pathMatch: 'full'},
      {path:"pokemon-list", component:PokemonListComponent},
      {path:"pokemon-data/:id",component:PokemonDataComponent},
        ])
  ],
  exports: [
    RouterModule
  ],
declarations :[]
})
export class AppRoutingModule { }
